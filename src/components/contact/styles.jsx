import styled from 'styled-components';
import { BlueContainer } from '../../styles';

export const ContactContainer = styled(BlueContainer)`
    height: 85vh;
    background-color: var(--primary-color);
    flex-direction: column;

    @media (max-width: 900px) {
        height: fit-content;
        padding-bottom: 40px;
    }

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
    width: 80%;
    max-width: 1200px;
    height: 70%;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    
    @media (max-width: 1000px) {
        width: 100%;
        textarea {
            min-height: 200px;
        }
    }

    @media (max-width: 765px) {
        flex-direction:  column;
        
        h2 {
            display: none;
        }

        form {
            min-width: 90%;
            min-height: 500px;
        }

        textarea {
            min-height: 300px;
        }
        
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ff6600;
        border: 1px solid var(--secondary-color);
        width: 50%;
        height: 90%;
        padding: 20px 15px;
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
            margin-top: 10px;
        }
        input, textarea {
            padding: 10px;
            outline: none;
            border-radius: 5px;
            border: none;
            width: 100%;
            resize: none;
            overflow: auto;
            box-shadow: none;
        }

        textarea{
            height: 100%;
            margin: 0;
        }

        .textarea{
            height: 100%
        }

        .subject {
            margin: 0 0 10px;
        }

        .submit {
            width: 40%;
            height: 60px;
            margin-top: 10px;
            filter: drop-shadow(-2px 2px 1px #00000088);
            overflow: hidden;
            color: #c5c5c5;
            font-weight: bold;
            background-color: transparent;
            border: 3px solid #c5c5c5;
            transition: 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                background-color: #c5c5c5;
                color: #f60;
                transform: scale(1.05);
            }
        }
    }

    .social{
        
        left: 17%;
        top: 3%;
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

