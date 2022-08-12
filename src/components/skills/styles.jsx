import styled from 'styled-components';
import { BlueContainer } from '../../styles';
import { Bounce } from '../hero/styles';

export const SkillsContainer = styled(BlueContainer)`
    height: 130vh;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media (min-width: 820px) {
        .learning div {
            flex-wrap: nowrap;
        }
    }

    @media (max-width: 768px) {
        height: 120vh;
    }

    @media (max-width: 728px) {
        height: 130vh;

        .learning div{
            min-width: 50%;   
            max-width: 100%; 
            width: 50%; 
        }
        
    }

    @media (max-width: 412px) {
        height: 145vh;
    }

    h1, h3 {
        color: var(--secondary-color);
        filter: drop-shadow(-2px 2px 1px #000);
    }

    h1 {
        margin: 70px 0 70px;
    }

    h3 {
        font-size: 20px;
    }
    

    hr {
        display: none;
    }

    &::before  {
        top: -3px;   
    }

    span {
        color: var(--terciary-color)
    }

    .learning {
        max-width: 850px;
        margin-top: 50px;
    }
    
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 640px;
    min-width: 500px;
    width: 50%;

    .ts,
    .native {
        margin: 20px;
        filter: drop-shadow(-4px 4px 1px #000);
        &:hover {
            transform: scale(1.2);
            animation: ${Bounce} 3s infinite;
        }
    }
    .ts{
        max-width: 120px;
        min-width: 90px;
    }

    .native {
        max-width: 400px;
        min-width: 200px;
    }
    @media (max-width: 728px) {
        min-width: 100%;   
        max-width: 100%;   
    }
`

export const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 8em;
    padding: 20px;
    width: 100%;

    .icon {
        margin: 15px;
        color: var(--secondary-color);
        filter: drop-shadow(-4px 4px 1px #000);
        transition: ease-in-out;

        &:hover {
            transform: scale(1.2);
            animation: ${Bounce} 3s infinite;
        }

    @media (max-width: 816px) {
            font-size: 0.8em;
        }
    }
    
    .odd {
        color: var(--terciary-color);
    }
`
