import {ExperienceGridWrapper} from "../experiencia/ExperienceGridWrapper.tsx";
import {educationComplementariaData} from "../../../data/education/educationComplementariaData.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";


export const FormacioComplementaria = () => {
    return (
        <>
            <SectionSubtitle title='Formació Compementària' />
            {educationComplementariaData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

