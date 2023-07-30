import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/762d5463-a3c0-4ab2-b55f-cab4ca029424" method="post" className="flex flex-col w-full md:w-8/12">
                    <Title>Get in Touch</Title>
                    <input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none" required />
                    <input type="text" name="emal" placeholder="Email" className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" required />
                    <textarea name="message" placeholder="Message" rows="10" className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none" required></textarea>
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-400 to-sky-700 drop-shadow-md">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;