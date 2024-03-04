
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
    
      className="mb-20 sm:mb-28 flex justify-center"
 
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          

          if (error) {
            toast.error(error);
            return;
          }
          router.push('/msg')
          toast("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack  dark:focus:bg-opacity-100 transition-all dark:outline"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:focus:bg-opacity-100 transition-all dark:outline"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Contact