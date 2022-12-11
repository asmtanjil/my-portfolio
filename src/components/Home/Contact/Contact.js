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
    <div id='contact' className='mt-20 mb-36 shadow-2xl p-10 mx-8 animate__fadeInRight animate__animated animate__slower	3s'>
      <h1 className='text-center text-4xl uppercase my-10'>Contact Me</h1>
      <div className="text-center text-2xl my-20 flex flex-col md:flex-row gap-4 items-center justify-around">
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