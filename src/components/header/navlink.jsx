import styled from 'styled-components'
import React from 'react';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

export const NavLink = props => {
    return (
        <Ul>
            <li> <Link to='sobreMim' className='link'>Sobre Mim</Link></li>
            <li> <Link to='comptencias' className='link'>Competências</Link></li>
            <li> <Link to='projetos' className='link'>Projetos</Link></li>
            <li> <Link to='projetos' className='link'>Contato</Link></li>
        </Ul>
    )
}

const mostrarLinha = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`

const Ul = styled.ul`
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

            &::after {
                display: none;
                content: "";
                position: absolute;
                bottom: -15%;
                left: 0;
                right: 0;
                background-color: #000;
                height: 1.5px;
                width: 100%;
            }
            
            &:hover:after{
                display: inline;
                background-color: #ff6600;
                text-align: center;
                animation: ${mostrarLinha} 0.3s normal;
            }
        }
        
        &:hover {
            font-weight: 700;
            transform: scale(1.1);
        }
    }

    
`