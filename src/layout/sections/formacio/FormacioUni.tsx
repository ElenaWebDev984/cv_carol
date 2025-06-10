import {ExperienceGridWrapper} from "../experiencia/ExperienceGridWrapper.tsx";
import {educationData} from "../../../data/education/educationData.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";


export const FormacioUni = () => {
    return (
        <>
            <SectionSubtitle title='Formació Acadèmica' />
            {educationData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

