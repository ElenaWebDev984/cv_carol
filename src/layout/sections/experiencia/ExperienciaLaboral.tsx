import {ExperienceGridWrapper} from "./ExperienceGridWrapper.tsx";
import {experienceData} from "../../../data/education/experienceData.ts";



export const ExperienciaLaboral = () => {
    return (
        <>
            {experienceData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};



