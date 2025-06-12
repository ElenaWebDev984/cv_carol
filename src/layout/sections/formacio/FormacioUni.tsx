import {ExperienceGridWrapper} from "../experiencia/ExperienceGridWrapper.tsx";
import {educationData} from "../../../data/education/educationData.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";
import styled from "styled-components";


export const FormacioUni = () => {
    return (
        <StyledFormacioUni>
            <SectionSubtitle title='Formació Acadèmica' />
            {educationData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </StyledFormacioUni>
    );
};

const StyledFormacioUni = styled.div`

`