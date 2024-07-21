export default function ShuffleText(element) {
    var _a;
    /**
     * The string for random text.
     * @type {string}
     * @default 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
     *///'&§!:/+=?;%^$*¥()[]{}@#Ø:`£_-'
    this.sourceRandomCharacter = "&§!:/+=?;%^$*¥()[]{}@#Ø:`£_-";
    /**
     * The string for effect space.
     * @type {string}
     * @default '-'
     */
    this.emptyCharacter = "-";
    /**
     * The milli seconds of effect time.
     * @type {number}
     * @default 600
     */
    this.duration = 2000;
    this._isRunning = false;
    this._originalStr = "";
    this._originalLength = 0;
    this._timeCurrent = 0;
    this._timeStart = 0;
    this._randomIndex = [];
    this._element = null;
    this._requestAnimationFrameId = 0;
    this._element = element;
    this.setText((_a = element.textContent) !== null && _a !== void 0 ? _a : "");
}
/**
 * Set new strings.
 * @param text
 */
ShuffleText.prototype.setText = function (text) {
    this._originalStr = text;
    this._originalLength = text.length;
};
Object.defineProperty(ShuffleText.prototype, "isRunning", {
    /**
     * It is running flag.
     * @returns {boolean}
     */
    get: function () {
        return this._isRunning;
    },
    enumerable: false,
    configurable: true
});
/** Play effect. */
ShuffleText.prototype.start = function () {
    var _this = this;
    this.stop();
    this._randomIndex = [];
    var str = "";
    for (var i = 0; i < this._originalLength; i++) {
        var rate = i / this._originalLength;
        this._randomIndex[i] = Math.random() * (1 - rate) + rate;
        str += this.emptyCharacter;
    }
    this._timeStart = new Date().getTime();
    this._isRunning = true;
    this._requestAnimationFrameId = requestAnimationFrame(function () {
        _this._onInterval();
    });
    if (this._element) {
        this._element.textContent = str;
    }
};
/** Stop effect. */
ShuffleText.prototype.stop = function () {
    this._isRunning = false;
    cancelAnimationFrame(this._requestAnimationFrameId);
};
/**
 * Dispose this instance.
 */
ShuffleText.prototype.dispose = function () {
    cancelAnimationFrame(this._requestAnimationFrameId);
    this._isRunning = false;
    this.duration = 0;
    this._originalStr = "";
    this._originalLength = 0;
    this._timeCurrent = 0;
    this._timeStart = 0;
    this._randomIndex = [];
    this._element = null;
    this._requestAnimationFrameId = 0;
};
/**
 * @private
 */
ShuffleText.prototype._onInterval = function () {
    var _this = this;
    this._timeCurrent = new Date().getTime() - this._timeStart;
    var percent = this._timeCurrent / this.duration;
    var str = "";
    for (var i = 0; i < this._originalLength; i++) {
        if (percent >= this._randomIndex[i]) {
            str += this._originalStr.charAt(i);
        }
        else if (percent < this._randomIndex[i] / 3) {
            str += this.emptyCharacter;
        }
        else {
            str += this.sourceRandomCharacter.charAt(Math.floor(Math.random() * this.sourceRandomCharacter.length));
        }
    }
    if (percent > 1) {
        str = this._originalStr;
        this._isRunning = false;
    }
    if (this._element) {
        this._element.textContent = str;
    }
    if (this._isRunning) {
        this._requestAnimationFrameId = requestAnimationFrame(function () {
            _this._onInterval();
        });
    }
};

