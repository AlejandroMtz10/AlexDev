/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbInfoSquare } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";
import { LuFolderCode } from "react-icons/lu";
import smallLogo from '../../assets/resources/small_logo.png';
import "./Navbar.css";

function Navbar(){
    return(
        <div className="container mx-auto flex justify-between items-center pb-3 pt-3 text-white py-6">
            <div>
                <img 
                    src={smallLogo}
                    alt="Alex Dev"
                    className="w-40 h-auto"
                />
            </div>
            <div>
                <ul className="flex items-center gap-x-6">
                    <Link to="/">
                        <li className="flex flex-col items-center text-2xl hover:underline hover:text-sky-600 duration-300">
                            <IoHomeOutline />
                            Home
                        </li>
                    </Link>
                    <Link to="/AboutMe">
                        <li className="flex flex-col items-center text-2xl hover:underline hover:text-sky-600 duration-300">
                            <TbInfoSquare />
                            About Me
                        </li>
                    </Link>
                    <Link to="/Contact">
                        <li className="flex flex-col items-center text-2xl hover:underline hover:text-sky-600 duration-300">
                            <BsFillSendFill />
                            Contact
                        </li>
                    </Link>
                    <Link to="/Projects">
                        <li className="flex flex-col items-center text-2xl hover:underline hover:text-sky-600 duration-300">
                            <LuFolderCode />
                            Projects
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;