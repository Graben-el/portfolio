import styled from 'styled-components';

export const DefaultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
`

export const BlueContainer = styled(DefaultContainer).attrs({as: 'section'})`
    height: 60vh;
    border-top: 3px solid var(--terciary-color);
    border-bottom: 3px solid var(--terciary-color);
    background-color: var(--primary-color);

    &::after,
    &::before {
        content: " ";
        position: absolute;
        bottom: -3px;
        width: 40%;
        height: 5px;
        background-color: #000;
        border: 3px solid var(--terciary-color);
        border-radius: 3px;
    }

    &::before {
        top: -4px;
    }

    
`

export const FadeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 50px;
`