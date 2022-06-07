import styled from 'styled-components';
import { DefaultContainer } from '../../styles';
import foto from '../../assets/imagens/projetos/electrum.png'
import gif from '../../assets/imagens/projetos/electrum.gif'

export const ProjectsContainer = styled(DefaultContainer).attrs({ as: 'section' })`
    flex-direction: column;
    height: 92vh;
    background-color: var(--secondary-color);
`

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: black; */
    width: 70%;
    height: 75%;
    margin-top: 15px;
`

export const CardMask = styled.div`
    width: 50%;
    max-width: 730px;
    height: 58%;
    border-radius: 10px;
    background: url(${foto}) center center no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    
    /* &:hover {
        background-size: contain;
        background-blend-mode: luminosity;
    } */
    `

export const Card = styled(CardMask)`
    position: relative;
    opacity:0;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    background-color: #000000b7;
    transition: 0.3s ease-in-out;
    color: #c5c5c5b5;
    
    &:hover {
        opacity:1;
        background: #000000b7 url(${gif}) center center no-repeat;
        background-size: contain;
    }
    
    div {
        position: absolute;
        bottom: 0;
        padding: 20px 15px;
        background: #0000006c;

        h2 {
            margin-bottom: 15px;
        }
    }
`