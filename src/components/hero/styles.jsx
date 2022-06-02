import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { DefaultContainer } from '../../styles'

const Bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    50%{
        transform: translateY(-10%);
    }
    100% {
        transform: translateY(0%);
    }
`

const ArrowBounce = keyframes`
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    50%{
        transform: translateY(20%);
        opacity: 1;
    }
    100% {
        transform: translateY(0%);
        opacity: 0;
    }
`

export const HeroContainer = styled(DefaultContainer).attrs({as: 'section'})`
    background-color: var(--primary-color);
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    transition: ease-in-out;
    

    &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        width: 40%;
        height: 5px;
        border: 3px solid var(--terciary-color);
        background-color: #000;
        border-radius: 5px;
    }
    

    .foto {
        border-radius: 50%;
        border: 5px solid #c5c5c5;
        width: 28%;
        outline: 3px solid var(--terciary-color);
        filter: drop-shadow(-5px 5px 4px  #0000007b);
        transition: 1.5s;
        
        &:hover {
            transform: scale(1.05);
        }
    }

    .seta {
        position: absolute;
        bottom: 4%;
        z-index: 2;
        animation: ${ArrowBounce} 2s infinite;
    }
`

export const TextContainer = styled.div`
    width: 48%;
    height: 50%;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .icons {
        font-size: 26px;
        color: var(--terciary-color);
        margin: 0 5px;
        filter: drop-shadow(-4px 3px 1px #000);
        &:hover {
            animation: ${Bounce} 1s infinite;
            transform: scale(1.1);
        }
    }

    .github {
        color: #fff;
    }

    p {
        font-weight: bold;
        font-size: 28px;
        margin: 5px 0;
    }

    span {
        color: var(--terciary-color);
        font-weight: bolder;
        font-size: 36px;
        filter: drop-shadow(-3px 2px 1px  #000);
    }
`