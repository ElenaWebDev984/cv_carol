import {ExperienceGridWrapper} from "./ExperienceGridWrapper.tsx";
import {experienceData} from "../../../data/education/experienceData.ts";
import styled from "styled-components";



export const ExperienciaLaboral = () => {
    return (
        <StyledExperienciaLaboral>
            {experienceData.map((course) => (
                <ExperienceGridWrapper key={course.id} {...course} />
            ))}
        </StyledExperienciaLaboral>
    );
};

const StyledExperienciaLaboral = styled.div`
    font-weight: 400;
    font-size: 17px;

`

