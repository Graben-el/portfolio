import styled from 'styled-components';
import { DefaultContainer } from '../../styles';

export const ProjectsContainer = styled(DefaultContainer)`
    height: 96vh;
    background-color: var(--secondary-color);
    filter: drop-shadow(1px 1px 1px black);
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 1440px;
`

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 10px;
    position: relative;
    max-width: 1290px;
    filter: drop-shadow( 0px 0px 7px  #000000);

    img {
        width: 100%;
        border-radius: 10px;
    }
`

export const SlideText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 1.5% 3%;
    height: 20%;
    min-height: 120px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    bottom: 0;
    background-color: #2b2b53b9;
    border: 1px solid #f60;
    color: white;

`

export const Mobile = styled.div`
    display: none;

`