
"use client"

import React from "react";
import SectionHeading from "../../components/section-heading";
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail } from "./sendEmail";
import SubmitBtn from "./submit-btn";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

    type Props = {}
 const Contact = async (props: Props) => {
 
  const router = useRouter()
  return (
    <div
      id="contact"
    
      className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full"
 
    >
     
      <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12"> <SectionHeading>Contact me</SectionHeading>
          <div className="imgbox lg:hidden">
           
            
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form  action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          

          if (error) {
            toast.error(error);
            return;
          }
          router.push('/msg')
          toast("Email sent successfully!");
        }} className="flex flex-col ">
            <div className="flex gap-4 py-2  ">
            <input
          className="h-14 px-4 rounded-lg borderBlack  dark:focus:bg-opacity-100 transition-all dark:outline"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
       
            </div> <SubmitBtn />
            </form>
          </div>


        </div>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black "
       
      >
      
      </form>
    </div>
  );
}

export default Contact