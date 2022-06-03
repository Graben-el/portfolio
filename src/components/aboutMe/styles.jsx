import styled from 'styled-components';
import { DefaultContainer } from '../../styles';
import foto from '../../assets/imagens/foto3.jpeg'

export const AboutMeContainer = styled(DefaultContainer).attrs({as: 'section'})`
    flex-direction: column;
    height: 92vh;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    width: 55%;
    min-width: 800px;
    max-width: 1000px;
    background-color: #dadada;
    margin-top: 55px;
    border-radius: 5px;
    filter: drop-shadow( 0px 0px 7px  #00000058);
`

export const PictureContainer = styled.div`
    width: 45%;
    max-width: 425px;
    min-width: 300px;
    height: 100%;
    border-right: 1px solid var(--terciary-color);
    background: url(${foto}) center center no-repeat;
    background-size: cover;
    
`

export const ResumeContainer = styled.div`
    min-width: 400px;
    width: 100%;
    height: 100%;
    padding: 45px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
        font-weight: 300;
        font-size: 15px;
    }

    span {
        color: var(--terciary-color);
        font-weight: 400;
    }
`