import React, {useState, useEffect} from "react";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (event) => {
        const target = event.target;
        setValues(values => ({ ...values, [target.name]: target.value }));
    }
      return (
        <form
            method="POST" 
            name="contact_form"
            data-netlify="true"
            netlify-honeypot="bot-field"
            // netlify
            action="/thank-you"
            >
            <input type="hidden" name="form-name" value="contact_form" />
            <label className="visually-hidden">Don’t fill this out if you're human: <input name="bot-field" /></label>
         
            <div className="container name">
                <label htmlFor="contact-name">Your Name</label><br></br>
                <input type="text" name="name" id="contact-name" value={values.name} onChange={handleChange} required/>
            </div>
            <div className="container email">
                <label htmlFor="contact-email">Your Email</label><br></br>
                <input type="email" name="email" id="contact-email" value={values.email} onChange={handleChange} required/>
            </div>
            <div className="container message">
                <label htmlFor="contact-message">Your Message</label><br></br>
                <textarea name="message" id="contact-message" value={values.message} onChange={handleChange} required/>
            </div>
            <button type="submit">Send</button>
          
        </form>

      )};
export default ContactForm;