import styled from 'styled-components';
import { BlueContainer } from '../../styles';

export const ContactContainer = styled(BlueContainer)`
    height: 85vh;
    background-color: var(--primary-color);
    flex-direction: column;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    width: 80%;
    max-width: 900px;
    height: 80%;

    form {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        background-color: grey;
        
        width: 50%;
        height: 70%;

        label {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: flex-start;
        }
    }
`

