import { Arrow, HeroContainer, Img, TextContainer } from './styles';
import { faLinkedin, faGithub, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonsContainer } from '../button/button';
import foto from '../../assets/imagens/foto3.jpeg'
import seta from '../../assets/imagens/seta_preta.png'
import cv from '../../assets/files/CV_Gabriel_RS.pdf'
import { Link } from 'react-router-dom';
import { CurriculumButton, HireMe } from '../header/styles';

function Hero(props) {
    return (

        <HeroContainer>
            <TextContainer>
                <div>
                    <Link to={'https://www.linkedin.com/in/gabriel-rsilva/'}>
                        <FontAwesomeIcon icon={faLinkedin} className='icons' />
                    </Link>
                    <Link to={'https://github.com/Graben-el'}>
                        <FontAwesomeIcon icon={faGithub} className='icons github' />
                    </Link>
                    <Link to='#' onClick={() => window.location = 'mailto:gabrielsilvadev96@gmail.com'}>
                        <FontAwesomeIcon icon={faGooglePlus} className='icons' />
                    </Link>
                </div>
                <p> Olá, meu nome é <span>Gabriel</span></p>
                <p>Sou Desenvolvedor Front-end Jr.</p>
                <ButtonsContainer>
                    <CurriculumButton href={cv} download>Baixar CV</CurriculumButton>
                    <HireMe >Fale Comigo</HireMe>
                </ButtonsContainer>
            </TextContainer>
            <Img src={foto} className='foto' />
            <Arrow src={seta} className='seta' />
        </HeroContainer>
    );
}

export default Hero;