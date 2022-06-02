import styled from 'styled-components';
import { DefaultContainer } from '../../styles';

export const AboutMeContainer = styled(DefaultContainer).attrs({as: 'section'})`
    flex-direction: column;
    height: 92vh;

    h1{
        margin-bottom: 10px;
        font-size: 32px;
    }

    h2 {
        font-size: 20px;
        padding-bottom: 10px;
        font-weight: 500;
        position: relative;

        &::after,
        &::before {
            position: absolute;
            content: '';
            
        }

        &::after{
            width: 40%;
            height: 5px;
            border-radius: 5px;
            left: 30%;
            bottom: -36%;
            background-color: var(--primary-color);
        }
        &::before{
            width: 150%;
            height: 1px;
            left: -23%;
            bottom: -30%;
            background-color: var(--terciary-color);
        }
    }
    
    span {
        filter: drop-shadow(-1px 1px #000);
    }
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    width: 45%;
    background-color: #dadada;
    margin-top: 55px;
    border-radius: 5px;
    filter: drop-shadow( 0px 0px 7px  #00000058);
`