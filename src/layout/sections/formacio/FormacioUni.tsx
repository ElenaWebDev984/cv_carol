import {ExperienceGridWrapper} from "../experiencia/ExperienceGridWrapper.tsx";
import {educationData} from "../../../data/about/educationData.ts";
import {Subtitle} from "../../../components/Subtitle.tsx";


export const FormacioUni = () => {
    return (
        <>
            <Subtitle title='Formació Acadèmica' />
            {educationData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </>
    );
};

