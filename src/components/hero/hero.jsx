import React from 'react';
import { HeroContainer, Picture, TextContainer } from './heroStyles';
import { faLinkedin, faGithub, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
// import { faReact, faHtml5, faCss3, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ButtonsContainer } from '../button/button';
import styled from 'styled-components'
import foto from '../../assets/imagens/foto.jpeg'
import cv from '../../assets/files/CV_Gabriel_RS.pdf'

function Hero(props) {
    return (
        <div style={{backgroundColor: '#2b2b53', borderBottom: "3px solid #ff6600"}}>
            <HeroContainer>
                <TextContainer>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} className='icons' />
                        <FontAwesomeIcon icon={faGithub} className='icons github' />
                        <FontAwesomeIcon icon={faGooglePlus} className='icons' />
                    </div>
                    <p> Olá, meu nome é <span>Gabriel</span></p>
                    <p style={{ width: '100%' }}>Sou um Desenvolvedor Front-end Jr.</p>
                    <ButtonsContainer>
                        <CurriculumButton href={cv} download>Baixar CV</CurriculumButton>
                        <HireMe >Fale Comigo</HireMe>
                    </ButtonsContainer>
                </TextContainer>
                <img src={foto} />
            </HeroContainer>
        </div>
    );
}

const CurriculumButton = styled(Button).attrs({as: 'a'})``

const HireMe = styled(Button)`
    &:hover {
        background-color: #ff6600;
        border: 3px solid #ff6600
    }
`

export default Hero;