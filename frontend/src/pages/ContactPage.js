/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import axios from "axios";


const ContactPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [fromData, setFromData] = useState(initialForm);

    const handChange = e => {
        const { name, value } = e.target;
        setFromData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, fromData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFromData(initialForm);
        }
    }

    return (
        <main>
            <div>
                <h2>Contact Us</h2>
                <p className="subtext">Feel free to ask us anything. We will get back to you via e-mail as soon as possible.</p>
                <form className="formnft" action="#" method="post" onSubmit={handleSubmit}>
                    <img className="bottomimg" src="img/contact.jpg"/>
                    <div>
                        <label htmlFor="nombre">Name:</label>
                        <input type="text" name="nombre" value={fromData.nombre} onChange={handChange} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" value={fromData.email} onChange={handChange} />
                    </div>
                    <div>
                        <label htmlFor="mensaje">Message:</label>
                        <textarea name="mensaje" id="mensaje" cols="20" rows="10" value={fromData.mensaje} onChange={handChange}></textarea>
                    </div>
                    { sending ? <div> Sending message...</div> : null}
                    {msg ? <div> {msg} </div> : null} 
                    
                    <input className="btnContact" type="submit" value="SEND" />
                    
                </form>
            </div>
        </main>
    );
}

export default ContactPage;