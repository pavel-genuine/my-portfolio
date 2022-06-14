import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    

    const sendEmail = (e) => {
      e.preventDefault();
      toast.success("Email Send")
     
      emailjs.sendForm('service_hwhbogo', 'template_n001lpr', form.current, 'BnDWIQfUtcswWwOx-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        

    };

    return (
        <form ref={form} onSubmit={sendEmail} id='contact' className='bg-neutral py-20'>
            <div><Toaster/></div>
            <h1 className='text-3xl font-semibold text-center text-[#e1815f] '>Contact Me :</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content md:pl-[20%] flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[aqua]">Reach Me out!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#e1815f]">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name="user_email" type="text" placeholder="email" className="input bg-neutral text-[aqua] input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea required name="message" className="border rounded p-3 bg-neutral text-[aqua]" placeholder='Message' id="" cols="30" rows="10"></textarea>
                               
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn  text-[#e1815f]" value='Submit'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contact;