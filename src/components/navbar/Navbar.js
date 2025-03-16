import React, { useState } from 'react';
import { Link, scroller } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { Terminal as TerminalIcon } from 'lucide-react';
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';
import Terminal from '../terminal/Terminal';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTerminalNavigation = (path) => {
    const section = path.replace('~/', '');
    const target = navLinksdata.find(link => link.title.toLowerCase() === section);
    if (target) {
      scroller.scrollTo(target.link, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
      setShowTerminal(false);
    }
  };

  return (
    <>
      {showTerminal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[80vh] max-h-[600px]">
            <Terminal
              onNavigate={handleTerminalNavigation}
              onClose={() => setShowTerminal(false)}
            />
          </div>
        </div>
      )}
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div className="font-bold ml-4">
          <button
            onClick={() => setShowTerminal(!showTerminal)}
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <TerminalIcon size={28} />
            <span className="text-sm">Open Terminal</span>
          </button>
        </div>

        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  <img className="w-32" src={logo} alt="logo" />
                  <p className="text-sm text-gray-400 mt-2 italic">
                    Hi! I'm Rasad Regmi, a Software Engineering student who is always passionate about coding. Always up for a chat, or a game. Let's connect and have some fun!
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                  </h2>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/rasad.regmi" target="blank">
                      <span className="bannerIcon" >
                        <FaFacebookF />
                      </span>
                    </a>
                    <a href="https://www.instagram.com/regmi_rasad/" target="blank">
                      <span className="bannerIcon">
                        <FaInstagramSquare />
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/rasad-regmi/" target="blank">
                      <span className="bannerIcon">
                        <FaLinkedinIn />
                      </span>
                    </a>
                  </div>
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;