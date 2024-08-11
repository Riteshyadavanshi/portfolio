import { Button } from '@/components/custome-btn';
import React from 'react';

const ContactForm = () => {
  return (
    <section  className='mt-4'>
      <div className="py-4   px-4 mx-auto max-w-screen-md bg-white rounded-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-900">Contact me</h2>
         
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email <span className='text-red-600'>*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="topic here..."
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message <span className='text-red-600'>*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <Button>send message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
