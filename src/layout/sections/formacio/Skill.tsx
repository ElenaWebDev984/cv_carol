import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";


type SkillTypes = {
    iconID: string
    title?: string
    subtitle?: string
    text?: string
}

export const Skill = ({iconID, title, subtitle, text}: SkillTypes) => {
    return (
        <StyledSkill>
            <Icon iconId={iconID} width='70' height='70' viewBox='0 0 70 70'/>
            <SkillTitle>{title}</SkillTitle>
            <SkillSubtitle>{subtitle}</SkillSubtitle>
            <SkillText>{text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    text-align: center;
    border: 3px dashed #fff0f9;
    padding: 10px;
    width: 25%;
`

export const SkillTitle = styled.h4`
    
`

const SkillText = styled.p`

`

export const SkillSubtitle = styled.h5`

`

