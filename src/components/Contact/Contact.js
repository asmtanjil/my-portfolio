import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u0540na', 'template_hoy0r36', form.current, 'g8ZewqDaOS-t0eYKm')
      .then((result) => {
        console.log(result.text);
        toast.success('Email Sent Successfully')
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div id='contact' className='mt-20 mb-36 shadow-2xl p-10 mx-8'>
      <h1 className='text-center text-3xl uppercase my-10'>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className='grid grid-cols-2 gap-5'>
          <input placeholder='Your Name' className="input input-bordered w-full" type="text" name="user_name" />

          <input placeholder='Your Email' className="input input-bordered w-full" type="email" name="user_email" />
          <textarea placeholder='Message' className="textarea h-[250px] textarea-bordered grid col-span-2" name="message" />
          <input className='btn grid col-span-2 capitalize' type="submit" value="Send An Email" />
        </div>
      </form>
    </div>
  );
};

export default Contact;