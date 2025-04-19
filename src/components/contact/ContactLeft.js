import React from 'react'
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full object-cover mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rasad Regmi</h3>
        <p className="text-lg font-normal text-gray-400">
          Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Hi! I'm Rasad, a Software Engineering student who is always passionate about coding. Always up for a chat, or a game. Let's connect and have some fun!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">regmirasad53@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft