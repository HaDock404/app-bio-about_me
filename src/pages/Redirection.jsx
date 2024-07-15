import styled from "styled-components"
import { Link } from "react-router-dom"

const CardLink = styled(Link)``

function Redirection() {
    return (
        <CardLink to="/Home">
            Click Me
        </CardLink>
    )
}

export default Redirection