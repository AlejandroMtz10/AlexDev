/* eslint-disable no-unused-vars */
import React from "react";
import MyInfo from "../../components/MyInfo";
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-end">
                <h1 className="pt-2">
                    About me
                </h1>
            </div>
            <MyInfo />
        </div>
    );
}

export default AboutMe;
