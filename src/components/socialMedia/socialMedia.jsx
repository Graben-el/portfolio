import { faGithub, faGooglePlus, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { IconsContainer } from "./styles"

export const Social = ({ children }) => {
    return (
        <IconsContainer>
            <Link to={'https://www.linkedin.com/in/gabriel-rsilva/'}>
                <FontAwesomeIcon icon={faLinkedin} className='icons' />
            </Link>
            <Link to={'https://github.com/Graben-el'}>
                <FontAwesomeIcon icon={faGithub} className='icons github' />
            </Link>
            <Link to='#' onClick={() => window.location = 'mailto:gabrielsilvadev96@gmail.com'}>
                <FontAwesomeIcon icon={faGooglePlus} className='icons' />
            </Link>
            <a href="https://wa.me/5565992797069" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className='icons github' />
            </a>
            { children }
        </IconsContainer >
    )
}