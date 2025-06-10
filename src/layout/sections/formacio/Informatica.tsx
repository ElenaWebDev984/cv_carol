import {Subtitle} from "../../../components/Subtitle.tsx";
import {Skill} from "./Skill.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Informatica = () => {
    return (
        <StyledInformaticaSkills>
            <Subtitle title='Informàtica'/>
            <FlexWrapper>
                <Skill/>
            </FlexWrapper>

        </StyledInformaticaSkills>
    );
};

const StyledInformaticaSkills = styled.div`
    h3 {
        text-align: center;
    }
`