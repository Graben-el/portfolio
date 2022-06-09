import React, { useState } from 'react';
import { SectionsHeader } from '../sectionsHeader/sectionsHeader';
import { ContactContainer, FormContainer } from './styles';

function Contact(props) {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }
        )
    }
    return (
        <ContactContainer>
            <SectionsHeader h1={'Contato'} h2={'Vamos conversar?'} />
            <FormContainer>
                <form>
                    <label>Nome
                        <input type='text' name='name' onChange={handleChange} value={input.name} />
                    </label>
                    <label>E-mail
                        <input type='email' name='email' onChange={handleChange} value={input.email} />
                    </label>
                    <label>Mensagem
                        <textarea name='message' onChange={handleChange} value={input.message} />
                    </label>
                </form>
            </FormContainer>
        </ContactContainer>
    );
}

export default Contact;