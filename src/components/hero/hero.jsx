import { Arrow, HeroContainer, Img, TextContainer } from './styles';
import { ButtonsContainer } from '../button/button';
import foto from '../../assets/imagens/foto3.jpeg'
import seta from '../../assets/imagens/seta_preta.png'
import cv from '../../assets/files/CV_Gabriel_RS.pdf'
import { CurriculumButton, HireMe } from '../header/styles';
import { Social } from '../socialMedia/socialMedia';
import Typical from 'react-typical'
import { Link } from 'react-scroll';

function Hero() {
    return (
        <HeroContainer>
            <TextContainer>
                <Social />
                <p className=''>
                    Olá, meu nome é <span>Gabriel</span>
                </p>
                
                    <Typical
                        loop={Infinity}
                        steps={[
                            'Desenvolvedor Front-end Jr 💻', 2000,
                            'Apaixonado por Tecnologia! 💽', 1000,
                            'Fanático por jogos de Luta! 🎮', 1000
                        ]}
                        wrapper='p'
                    />
               
                <ButtonsContainer>
                    <CurriculumButton href={cv} download>Baixar CV</CurriculumButton>
                    <Link activeClass='active' spy={true} smooth={true} duration={2000} to='contact' className='contact'>
                        <HireMe >Fale Comigo</HireMe>
                    </Link>
                </ButtonsContainer>
            </TextContainer>
            <Img src={foto} className='foto' />
            <Arrow src={seta} className='seta' />
        </HeroContainer>
    );
}

export default Hero;