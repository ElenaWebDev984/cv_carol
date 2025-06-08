import {ExperienceGridWrapper} from "../experiencia/ExperienceGridWrapper.tsx";
import {educationComplementariaData} from "../../../data/educationComplementariaData.ts";
import {Subtitle} from "../../../components/Subtitle.tsx";


export const FormacioComplementaria = () => {
    return (
        <>
            <Subtitle title='Formació Compementària' />
            {educationComplementariaData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

