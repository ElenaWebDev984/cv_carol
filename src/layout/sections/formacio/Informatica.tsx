import {Subtitle} from "../../../components/Subtitle.tsx";
import {Skill} from "./Skill.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Informatica = () => {
    return (
        <StyledInformaticaSkills>
            <Subtitle title='Informàtica'/>
            <FlexWrapper wrap='wrap'>
                <Skill iconID='word'/>
                <Skill iconID='powerpoint'/>
                <Skill iconID='excel'/>
                <Skill iconID='access'/>
            </FlexWrapper>

        </StyledInformaticaSkills>
    );
};

const StyledInformaticaSkills = styled.div`
    
`