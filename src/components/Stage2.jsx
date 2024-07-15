import '../styles/stage2.css'

function Stage2() {
    return (
        <svg className="stage2" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect id="topStage2" width="100%" height="16.5%" fill="#C3C3C3"/>
            <rect id='rightStage2' x="45%" y="16%" width="100%" height="35%" fill="#C3C3C3"/>
            <rect id='leftStage2' y="16%" width="30%" height="35%" fill="#C3C3C3"/>
            <rect id='bottomStage2' y="50.5%" width="100%" height="20%" fill="#C3C3C3"/>
            <rect y="75%" width="100%" height="25%" fill="#5C5E6F"/>
            <rect y="70%" width="100%" height="5%" fill="#A5A5A5"/>
            <g>
                <rect id="testStroke" x="30%" y="16%" width="15%" height="35%" stroke="#A5A5A5" strokeWidth="1%"/>
            </g>
            <defs>
                <clipPath id="clip0_178_2">
                    <rect width="1512" height="982" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default Stage2