import {ExperienceGridWrapper} from "./ExperienceGridWrapper.tsx";
import {AboutTitle} from "./About.tsx";
import {educationData} from "./data/educationData.ts";


export const AboutEducation = () => {
    return (
        <>
            <AboutTitle>Formació Acadèmica</AboutTitle>
            {educationData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

