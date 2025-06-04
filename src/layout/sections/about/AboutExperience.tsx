import {AboutGridWrapper} from "./AboutGridWrapper.tsx";
import {experienceData} from "./data/experienceData.ts";
import {AboutTitle} from "./About.tsx";



export const AboutExperience = () => {
    return (
        <>
            <AboutTitle>Experiència Laboral</AboutTitle>
            {experienceData.map((course) => (
                <AboutGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};



