/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TechCard from "../TechCard";
import technologies from "../../json/technologies.json"; // Importamos el JSON

const StackTech = () => {
    const [techs, setTechs] = useState([]);

        useEffect(() => {
        // Simula una carga si necesitas
        setTechs(technologies);
    }, []);

    return (
        <div className="tech-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {techs.map((tech, index) => (
                <TechCard key={index} name={tech.name} image={tech.image} status={tech.status} />
            ))}
        </div>
    );
};

export default StackTech;