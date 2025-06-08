import {ExperienceGridWrapper} from "../experiencia/ExperienceGridWrapper.tsx";
import {educationComplementariaData} from "../../../data/about/educationComplementariaData.ts";
import {Subtitle} from "../../../components/Subtitle.tsx";


export const AboutEducationComplementaria = () => {
    return (
        <>
            <Subtitle title='Formació Compementària' />
            {educationComplementariaData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

