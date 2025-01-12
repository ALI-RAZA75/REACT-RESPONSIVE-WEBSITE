import React from 'react'
import './Contact.css'
import contact_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "39328185-5513-4e9d-bc97-a3cfd0311b33");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Messsage <img src={contact_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta,
                 esse cupiditate nemo deserunt labore expedita illum earum
                 architecto quidem doloremque laboriosam vel reiciendis quasi,
                  inventore error enim voluptates atque.</p>
                  <ul>
                    <li><img src={email_icon} alt="" /> contact@tetracrystals.com</li>
                    <li><img src={phone_icon} alt="" /> +1 234-456-7890</li>
                    <li><img src={location_icon} alt="" /> 15205 North Kierland Blvd. Suite 100</li>
                  </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Enter phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact