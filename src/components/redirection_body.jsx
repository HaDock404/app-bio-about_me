import '../styles/redirection_body.css'
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter

function Redirection_body() {
    return (
        <div id='body'>
            <div className="container">
                <div className="message">
                    Ce site est en beta test et n'est pas encore complètement optimisé pour toutes les tailles d'écran, merci de votre patience.
                </div>
                <Link to="/app-bio-about_me/Home" className="button">Visiter</Link>
            </div>
        </div>
    )
}

export default Redirection_body