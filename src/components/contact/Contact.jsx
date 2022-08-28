import React, {useState} from "react";
import './contact.css';

const Contact= () => {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            alert(inputs);
        }
    return (
        <section id="contact">
            <div className="container contact__container">
                <h1> Contact </h1>
                <p> Let's chat! </p>
                <form onSubmit={handleSubmit}>
                    <label>Enter your name:
                        <input
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Enter your email:
                        <input
                            type="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Message:
                        <input
                            type="text"
                            name="message"
                            value={inputs.message || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact;