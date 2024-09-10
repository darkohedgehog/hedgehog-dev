"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationArrow } from "react-icons/fa6";

const ContactForm = () => {
   
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
     
  
      emailjs
        .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Hedgehog Web Developer",
            from_email: form.email,
            to_email: "zivic.darko79@gmail.com",
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Hvala Vam. Dobit ćete odgovor u što kraćem roku.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, dogodila se greška. Pokušajte ponovo.");
          }
        );
    };

  return (
    <div className="w-2/3">
        <h1 className="flex items-center justify-center my-3 text-xl font-semibold uppercase text-accent dark:text-accentDark">
            Pošaljite upit
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='my-8 flex flex-col gap-6 border-2 border-[#6C6C6C] shadow-lg shadow-accent dark:shadow-accentDark rounded-[30px]'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium my-4 mx-5'>Vaše ime</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Kako se zovete?"
              className='py-4 px-6 mx-2 placeholder:text-secondary text-white border-1 border-[#6C6C6C] shadow-lg shadow-accent dark:shadow-accentDark rounded-[30px] font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 mx-5'>Vaš email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Koji je Vaš email?"
              className='py-4 px-6 mx-2 placeholder:text-secondary text-white border-1 border-[#6C6C6C] shadow-lg shadow-accent dark:shadow-accentDark rounded-[30px] font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 mx-5'>Vaša poruka</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Koja je Vaša poruka?'
              className='py-4 px-6 mx-2 placeholder:text-secondary text-white border-1 border-[#6C6C6C] shadow-lg shadow-accent dark:shadow-accentDark rounded-[30px] font-medium'
            />
          </label>

          <button
          type="submit"
          className="relative mb-6 inline-flex h-12 w-[200px] mx-5 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accent dark:text-accentDark backdrop-blur-3xl gap-3">
             {loading ? "Šaljem..." : "Pošalji"}
              <FaLocationArrow />
            </span>
            </button>
        </form>
    </div>
  )
}

export default ContactForm