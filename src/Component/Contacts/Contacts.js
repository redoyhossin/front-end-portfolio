import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../Assets/project/contactme.jpeg'
import UseTitle from '../../Hooks/UseTitle/UseTitle';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';

const Contacts = () => {
    UseTitle('Contacts')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_czh0szi', 'template_u2rgxbg', form.current, 'us8-RMhrYNIIRSvlP')
            .then((result) => {
                console.log(result.text);
                console.log('done')
                toast.success('Send')
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };
    return (
        <div>
             <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='' src={contact} alt="" />
                </div>
                <form ref={form} onSubmit={sendEmail} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-red-300 ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact Me</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input name="to_name" id="name" type="text" placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input name="from_name" id="email" type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" data-temp-mail-org="2" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea name="message" required id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                    </div>
                    <div>
                        <button type="submit" value="Send" className="w-full bg-green-300 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 ">Send</button>
                    </div>
                </form>
                </div>
                
            </div>
            <Footer/>
       </div>
    );
};

export default Contacts;