"use client"
import { Button } from '@/components/custome-btn';
import { sendEmail } from '@/lib/action';
import React, { useState, useTransition } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [pending,startTransition]=useTransition()
  const [error,setError]=useState<string|null>(null)
  const [success,setSuccess]=useState<string|null>(null)
  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setError("")
    setSuccess('')
    if(formData.email===""||formData.subject===""||formData.message===""){
      setError("Please fill all the fields")
      return
    }
    startTransition(async()=>{
      const res=await sendEmail(formData) 
        if(res.success){
          setSuccess("Email sent successfully")
          setFormData({
            email:"",
            message:"",
            subject:""
          })
        }else{
          setError("Email not sent")
        }
      
       
    })
  }
  return (
    <section  className='mt-4 min-h-screen   '>
      <div className="py-4   px-4 mx-auto max-w-screen-md bg-white rounded-md  ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-900">Contact me</h2>
         
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email <span className='text-red-600'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name='email'
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name='subject'
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="topic here..."
             
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message <span className='text-red-600'>*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              name='message'
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          {success && <p className='text-green-500'>{success}</p>}
          <Button disable={pending}>{pending?"Sending ...":"send message"}</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
