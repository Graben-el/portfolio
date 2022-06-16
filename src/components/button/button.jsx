import styled from 'styled-components';

export const Button = styled.a`
    padding: 12px 20px;
    border-radius: 20px;
    color: #fff;
    border: 3px solid #c5c5c5;
    background-color: transparent;
    font-weight: 400;
    font-size: 14px;
    transition: 0.2s ease-in;
    
    &:hover {
        background-color: #c5c5c5;
        border: 3px solid #c5c5c5;
        color: #262650;
        font-weight: 700;
        transform: scale(1.05);
        box-shadow: -2px 2px 2px 2px #00000067;
    }

    
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 290px;
    height: 80px;
`