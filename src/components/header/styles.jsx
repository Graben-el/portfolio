import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Button } from '../button/button';

const mostrarLinha= keyframes`
    0% {
        width: 0%;
        
        background-color: #ff6600;
    }
    100% {
        
        width: 120%;
        
    }
`

export const Container = styled.header`
    display: flex;
    justify-content:  space-around;
    align-items: center;
    padding: 15px 60px;
    background-color: var(--secondary-color);
    max-width: 1440px;
    margin: 0 auto;
    color: #000;
    position: relative;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        bottom: -11px;
        width: 40%;
        height: 5px;
        border: 3px solid var(--terciary-color);
        background-color: #000;
        border-radius: 5px;
    }

    img {
        width: 50px;
        margin-right: 50px;
    }

`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 60px;

    li {
        margin-left: 50px;
        font-weight: 500;
        transition: 0.3s ease-in;

        a {
            position: relative;
            transition: 0.2s;
            
            &::after,
            &::before {
                display: none;
                content: "";
                position: absolute;
                left: -5%;
                right: 0;
                background-color: #000;
                height: 1px;
                width: 110%;
            }

            &::before {
                top: -22%;
            }

            &::after {
                bottom: -22%;
            }
            
            &:hover:after, 
            &:hover:before{
                display: inline;
                text-align: center;
                animation: ${mostrarLinha} 1s backwards;
                background-color: transparent;
            }
        }
        
        &:hover {
            font-weight: 700;
            transform: scale(1.1);
        }
    }   
`
export const CurriculumButton = styled(Button).attrs({as: 'a'})``

export const HireMe = styled(Button)`
    &:hover {
        background-color: var(--terciary-color);
        border: 3px solid var(--terciary-color);
    }
`