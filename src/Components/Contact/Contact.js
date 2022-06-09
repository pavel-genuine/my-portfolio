import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='bg-neutral  py-20'>
            <h1 className='text-3xl font-semibold text-center text-[aqua] '>Contact Me :</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[aqua]">Reach Me now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#e1815f]">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input bg-neutral text-[aqua] input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="border rounded p-3 bg-neutral text-[aqua]" placeholder='Message'  name="" id="" cols="30" rows="10"></textarea>
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  text-[#e1815f]">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;