import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';

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
    <div id='contact' className='p-8 md:p-12'>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-12'>Contact Me</h1>
      <div className="text-center md:text-lg my-12 flex flex-col md:flex-row gap-4 items-center justify-around">
        <div className='flex gap-2 items-center'>
          <MdEmail></MdEmail>
          <p>asm.tanjil@gmail.com</p>
        </div>

        <div className='flex gap-2 items-center'>
          <BsFillTelephoneFill></BsFillTelephoneFill>
          <p>+880-1767676799</p>
        </div>

        <div className='flex gap-2 items-center'>
          <BsLinkedin></BsLinkedin>
          <p><a href="https://www.linkedin.com/in/asmtanjil/">LinkedIn</a></p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='grid grid-cols-1 justify-items-center gap-6'>
          <input placeholder='Your Name' className="input input-bordered w-full md:w-3/5" type="text" name="user_name" />

          <input placeholder='Your Email' className="input input-bordered w-full md:w-3/5" type="email" name="user_email" />
          <textarea placeholder='Message' className="textarea h-[80px] md:h-[130px] w-full md:w-3/5 textarea-bordered" name="message" />
          <input className='btn btn-accent w-full md:w-3/5 capitalize' type="submit" value="Send An Email" />
        </div>
      </form>
    </div>
  );
};

export default Contact;