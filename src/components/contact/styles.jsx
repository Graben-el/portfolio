import styled from 'styled-components';
import { BlueContainer } from '../../styles';

export const ContactContainer = styled(BlueContainer)`
    height: 85vh;
    background-color: var(--primary-color);
    flex-direction: column;

    h1, h2 {
        color: #c5c5c5;
        filter: drop-shadow(-2px 2px 1px #000);
    }

    hr {
        &::after {
            background-color: #c5c5c5;
            border: 1px solid #000;
        }
    }
    `

export const FormContainer = styled.div`
    margin-top: 50px;   
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background-color: #ffff; */
    /* border: 1px solid white; */
    width: 80%;
    max-width: 1200px;
    height: 70%;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    /* border: 2px solid #f60; */
    /* filter: drop-shadow(-4px 4px 1px #00000076); */
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f60;
        border: 1px solid var(--primary-color);
        width: 50%;
        height: 90%;
        /* position: absolute; */
        bottom: 4%;
        right: 3%;
        padding: 20px 15px 0;
        border-radius: 10px;
        filter: drop-shadow(-3px 3px 1px #0000002b);

        label {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: flex-start;
            width: 90%;
            color: #c5c5c5;
            filter: drop-shadow(-2px 2px 1px #00000088);
        }
        input, textarea {
            padding: 10px;
            outline: none;
            border-radius: 5px;
            border: none;
            margin: 0 0 20px;
            width: 100%;
            resize: none;
            overflow: auto;
            box-shadow: none;
        }

        textarea{
            height: 100%;
        }

        .textarea{
            height: 50%
        }

        .submit {
            width: 50%;
            margin-top: 20px;
            filter: drop-shadow(-2px 2px 1px #00000088);
        }
    }

    .social{
        
        left: 17%;
        top: 3%;
        /* background-color: black; */
        width: 35%;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;

        .icons {
            font-size: 36px;
            margin: 15px;
            filter: drop-shadow(-2px 2px 2px #000);
        } 

        h2 {
            font-size: 40px;
            margin: 0 0 40px 0;
        }

        .emoticon {
            font-size: 36px;
        }
    }
`

