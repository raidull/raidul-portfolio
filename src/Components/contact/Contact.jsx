import React , { useState }from 'react'
import axios from 'axios'
import { FaRegAddressBook , FaRegEnvelope , FaRegUser , FaRegMap} from "react-icons/fa";
import './contact.css'


const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    };

    const handleSubmit= (e)  =>  {
        e.preventDefault();

        axios.post('https://api.sheetbest.com/sheets/154f79a9-01f3-4496-9bdb-cdd5e084fa4d', form).then((response) => {
            console.log(response); 

            // clearing from fields
            setForm({name:'', email:'', subject:'', message:''})
        });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">contact me - hmu</h2>
            <p className="section__subtitle">
                let's <span>talk about ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__contentt">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap/>
                        </span>
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Ithaca, NY, 14853</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope/>
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">raidul2105@gmail.com</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook/>
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+1(607)-697-5848</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">your full name <b>*</b></label>
                            <input 
                                type="text" 
                                name='name' 
                                onChange = {handleChange}
                                value={form.name} 
                                className="contact__form-input" 
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">your email address <b>*</b></label>
                            <input 
                                type="email" 
                                name='email' 
                                onChange = {handleChange}
                                value={form.email}
                                className="contact__form-input" />
                        </div>
                    </div>

                    <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">your subject <b>*</b></label>
                            <input 
                                type="text" 
                                name='subject' 
                                onChange = {handleChange}
                                value={form.subject}
                                className="contact__form-input" />
                        </div>

                    <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag text-cs">your message<b>*</b></label>
                            <textarea 
                                name='message' 
                                onChange = {handleChange}
                                value={form.message}
                                className='contact__form-input'></textarea>
                        </div>
                    

                    <div className="contact__submit">
                        <button type = "submit" className="btn text-cs">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact