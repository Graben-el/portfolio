import styled from 'styled-components'

export const HeroContainer = styled.section`
    background-color: #2b2b53;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    

    &::after {
        content: "";
        position: absolute;
        bottom: -6px;
        width: 40%;
        height: 5px;
        border: 2px solid #ff6600;
        background-color: #000;
    }
    

    img {
        border-radius: 50%;
        border: 5px solid #eff2f1;
        width: 350px;
        outline: 3px solid #ff6600;
        
        filter: drop-shadow(-5px 5px 4px  #0000007b);
    }
`

export const Picture = styled.div`
    background-color: #eff2f1;
    width: 29%;
    height: 43%;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const TextContainer = styled.div`
    width: 48%;
    height: 50%;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .icons {
        font-size: 26px;
        color: #ff6600;
        margin: 0 5px;
        filter: drop-shadow(-4px 3px 1px #000);
    }

    .github {
        color: #fff;
    }

    p {
        font-weight: bold;
        font-size: 28px;
        margin: 5px 0;
    }

    span {
        color: #ff6600;
        font-weight: bolder;
        font-size: 36px;
        filter: drop-shadow(-3px 2px 1px  #000);
    }
`