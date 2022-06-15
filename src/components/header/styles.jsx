import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Button } from '../button/button';

const mostrarLinha = keyframes`
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
    padding: 20px 60px;
    background-color: var(--secondary-color);
    max-width: 1440px;
    margin: 0 auto;
    color: #000;
    position: relative;

    @media (max-width: 907px) {
        width: 100%;
        padding: 20px 40px;
        justify-content: space-between;
    }

    img {
        width: 50px;
        margin-right: 50px;
        
        filter: drop-shadow(-5px 5px 4px  #0000007b);
    }

`


export const NavContainer = styled.nav`
    #react-burger-menu-btn {
        width: 70px;
    }

    .bm-burger-button {
        width: 45px;
        height: 30px;
        display: none;
        position: relative;
        
        
        @media (max-width: 907px) {
            display: block;
        }
    }
    
    .bm-burger-bars {
        border-radius: 10px;
        background: #000;
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        left: auto;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: #f60;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #f60;
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        position: absolute;
        right: 0%;
    }

    /* General sidebar styles */
    .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        text-align: center;
    }

    /* Individual item */
    .bm-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        width: 100%;
        top: 0;
        right: 0%;
        overflow-x: hidden;
    }
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;

    @media (max-width: 907px) {
        display: none;
    }

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
            cursor: pointer;
        }
    }   
`
export const CurriculumButton = styled(Button).attrs({ as: 'a' })``

export const HireMe = styled(Button)`
    &:hover {
        background-color: var(--terciary-color);
        border: 3px solid var(--terciary-color);
        cursor: pointer
    }
`