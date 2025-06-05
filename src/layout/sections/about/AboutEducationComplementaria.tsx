import {AboutTitle} from "./About.tsx";
import {ExperienceGridWrapper} from "./ExperienceGridWrapper.tsx";
import {educationComplementariaData} from "./data/educationComplementariaData.ts";


export const AboutEducationComplementaria = () => {
    return (
        <>
            <AboutTitle>Formació Compementària</AboutTitle>
            {educationComplementariaData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

