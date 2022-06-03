import styled from 'styled-components';

export const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 32px;
`

export const SubTitle = styled.h2`
    font-size: 20px;
    padding-bottom: 10px;
    font-weight: 500;
`;

export const Divider = styled.hr`
    background-color: var(--terciary-color);
    width: 150%;
    height: 1px;
    border: none;
    position: relative;
    overflow: visible;
    margin-top: 15px;

    &::after{
        position: absolute;
        content: '';
        width: 30%;
        height: 5px;
        border-radius: 5px;
        transform: translate(120%, -35%);
        
        background-color: var(--primary-color);
    }
`