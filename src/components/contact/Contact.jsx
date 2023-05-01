import React, {useState} from "react";
import './contact.css';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_rvmka5d',
            'template_bdnhxl4',
            toSend,
            'X2dAvIPXx6ZVso8QT'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <section id="contact">
            <div className="container contact__container">
                <h1> Contact (WiP) </h1>
                <p> Let's chat! </p>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button type='submit'> Submit </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;