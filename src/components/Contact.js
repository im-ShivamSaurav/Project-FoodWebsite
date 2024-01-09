import { CONTACT_US_URL } from "../utils/constants"

export default function Contact(){
    return(
        <div className="contact-us">
            <div className="Formal">
                <img src={CONTACT_US_URL}/>
                <h2>Get in touch..</h2>
                <p>We will be happy to hear your response.</p>
            </div>
            <div className="Form">
                <div><h1>Contact Us</h1></div>
                <form className="ContactForm">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type='email'/>
                    <label for="Name">Name:</label>
                    <input id= "Name" name="Name" type="text"/>
                    <label for="Message">Message:</label>
                    <input className="message" id= "Message" name="Messgae" type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}