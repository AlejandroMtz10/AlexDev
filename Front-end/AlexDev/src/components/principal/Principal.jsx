/* eslint-disable no-unused-vars */
import React from "react";
import './Principal.css'
import profilePicture from '../../assets/resources/profile_picture.jpg';
import EmailCard from "../EmailCard";
import ResumeCard from "../ResumeCard";
import SocialContact from "../SocialContact";

export default function Home(){
    return(
        <div className="container mx-auto">
            <div className="flex">
                <div className="container mx-auto content-center">
                    <h1 className="text-wrap text-cyan-600">
                        Hello, I am Eng. Alejandro Martinez Rivera.
                    </h1>
                    <p className="text-wrap text-cyan-400">
                        I am a computer systems engineer with a specialty in software architecture and development so I like to develop in roles such as QA, software architect or software developer because it allows me to apply my knowledge about what I know in software development.
                    </p>
                </div>
                <div className="containerImg mx-auto">
                    <img src={profilePicture} alt="Profile picture Ing. Alejandro Martinez" className="picture"/>
                </div>
            </div>
            <div className="container flex mx-auto place-items-center">
                <p className="text-wrap text-cyan-400 text-xl">
                    3 years of experience
                </p>
            </div>
            <div className="pb-2 pt-1">
                <div className="container mx-auto flex place-content-center items-center">
                    <div className="container flex mr-2 border-8 rounded-3xl border-cyan-500">
                        <EmailCard />
                        <ResumeCard />
                        <SocialContact />
                    </div>
                </div>
            </div>
        </div>
    );
}