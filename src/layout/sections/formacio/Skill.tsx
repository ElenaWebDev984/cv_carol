import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId='catalan' width='70' height='70' viewBox='0 0 70 70'/>
            <SkillTitle>Títol de Català</SkillTitle>
            <SkillSubtitle>Nivell C</SkillSubtitle>
            <SkillText>Final Batxillerat any 1994</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    text-align: center;
`

const SkillTitle = styled.h4`
    
`

const SkillText = styled.p`

`

const SkillSubtitle = styled.h5`

`

