/* eslint-disable no-unused-vars */
import React from "react";
import MyInfo from "../../components/MyInfo";
import StackTech from "../../components/StackTech";
import StackTools from "../../components/StackTools";
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
            <div className="container">
                <h1 className="text-4xl pb-4">
                    Technologies
                </h1>
                <hr />
                <StackTech />
            </div>
            <div className="container">
            <h1 className="text-4xl pb-4">
                    Tools
                </h1>
                <hr />
                <StackTools />
            </div>
        </div>
    );
}

export default AboutMe;
