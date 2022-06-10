import React, { useState } from 'react';
import { FadeContainer } from '../../styles';
import { SectionsHeader } from '../sectionsHeader/sectionsHeader';
import { Social } from '../socialMedia/socialMedia';
import { ContactContainer, FormContainer } from './styles';

function Contact () {
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

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <ContactContainer  >
            <FadeContainer data-aos='fade-down'>
                <SectionsHeader className='header' h1={'Contato'} h2={'Vamos conversar?'} style={{ color: '#c5c5c5' }} />
                <FormContainer>
                    <div className="social">
                        <h2>Entre em contato comigo </h2>
                        <Social />
                    </div>
                    <form>
                        <label>Nome
                            <input type='text' name='name' onChange={handleChange} value={input.name} />
                        </label>
                        <label>E-mail
                            <input type='email' name='email' onChange={handleChange} value={input.email} />
                        </label>
                        <label className='textarea'>Mensagem
                            <textarea name='message' onChange={handleChange} value={input.message} />
                        </label>
                        <input type='submit' rows='50' className='submit' onClick={handleSubmit} />
                    </form>
                </FormContainer>
            </FadeContainer>
        </ContactContainer>
    );
}

export default Contact;