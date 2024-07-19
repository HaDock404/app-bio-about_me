import '../styles/redirection_body.css'
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter

function Redirection_body() {
    return (
        <div id='body'>
            <div className="container">
                <div className="message">
                    Ce site est en Beta test et n'est pas encore complètement optimisé pour toutes les tailles d'écran, merci de votre patience. 
                    <br></br>
                    <br></br>
                    This site is in beta testing and is not yet fully optimized for all screen sizes, thank you for your patience.
                </div>
                <Link to="/app-bio-about_me/Home_FR" className="button">Visiter en Français</Link>
                <br />
                <br />
                <Link to="/app-bio-about_me/Home_EN" className="button">Visit in English</Link>
            </div>
        </div>
    )
}

export default Redirection_body