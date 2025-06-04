import {ExperienceGridWrapper} from "./ExperienceGridWrapper.tsx";
import {experienceData} from "./data/experienceData.ts";
import {AboutTitle} from "./About.tsx";



export const AboutExperience = () => {
    return (
        <>
            <AboutTitle>Experiència Laboral</AboutTitle>
            {experienceData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};



