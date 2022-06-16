import styled from 'styled-components';
import { Bounce } from '../hero/styles';

export const IconsContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;

    .icons {
        font-size: 26px;
        color: var(--terciary-color);
        margin: 0 5px;
        filter: drop-shadow(-4px 3px 1px #000);
        &:hover {
            animation: ${Bounce} 1s infinite;
            transform: scale(1.1);
        }

        @media (max-width: 907px) {
            font-size: 32px;
        }
    }

    .github {
        color: #fff;
    }

`