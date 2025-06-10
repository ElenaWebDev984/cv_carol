import styled from "styled-components";
import {Subtitle} from "../../../components/Subtitle.tsx";
import {Skill} from "./Skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const Idiomes = () => {
    return (
        <StyledIdiomesSkills>
            <Subtitle title='Idiomes'/>
            <FlexWrapper>
                <Skill/>
            </FlexWrapper>

        </StyledIdiomesSkills>
    );
};

const StyledIdiomesSkills = styled.div`
    h3 {
        text-align: center;
    }
`