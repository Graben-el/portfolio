import React, { useState } from 'react';
import { FadeContainer } from '../../styles';
import { SectionsHeader } from '../sectionsHeader/sectionsHeader';
import { Social } from '../socialMedia/socialMedia';
import { ContactContainer, FormContainer } from './styles';
import * as emailjs from 'emailjs-com';

function Contact() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zf3xdgs', 'template_iao4g5j', e.target, 'f8yCASWn9xcjEusJK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setInput({
            name: '',
            email: '',
            message: '',
            subject: ''
        })
    };

    return (
        <ContactContainer  >
            <FadeContainer data-aos='fade-down'>
                <SectionsHeader className='header' h1={'Contato'} h2={'Vamos conversar?'} style={{ color: '#c5c5c5' }} />
                <FormContainer>
                    <div className="social">
                        <h2>Entre em contato comigo </h2>
                        <Social />
                    </div>
                    <form onSubmit={sendEmail}>
                        <label>Nome
                            <input type='text' name='name' onChange={handleChange} value={input.name} />
                        </label>
                        <label>E-mail
                            <input type='email' name='email' onChange={handleChange} value={input.email} />
                        </label>
                        <label className='textarea'>Mensagem
                            <input type='text' name='subject' onChange={handleChange} value={input.subject} placeholder='Assunto' className='subject' />
                            <textarea name='message' onChange={handleChange} value={input.message} placeholder='Mensagem' />
                        </label>
                        <input type='submit' className='submit' value={'Enviar'} />
                    </form>
                </FormContainer>
            </FadeContainer>
        </ContactContainer>
    );
}

export default Contact;