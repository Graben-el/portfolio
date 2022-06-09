import React from 'react';
import { SectionsHeader } from '../sectionsHeader/sectionsHeader';
import { ContactContainer, FormContainer } from './styles';

function Contact(props) {
    return (
        <ContactContainer>
            <SectionsHeader h1={'Contato'} h2={'Vamos conversar?'} />
            <FormContainer>
                <form>
                    <label>Nome
                        <input type='text' name='name' />
                    </label>
                    <label>E-mail
                        <input type='email' name='email' />
                    </label>
                    <label>Mensagem
                        <textarea name='message' />
                    </label>
                </form>
            </FormContainer>
        </ContactContainer>
    );
}

export default Contact;