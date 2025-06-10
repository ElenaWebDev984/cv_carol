import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";
import {SkillSubtitle, SkillTitle} from "./Skill.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Image} from "../../../components/Image.tsx";
import actic from '../../../assets/images/informatica/actic.png'
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Informatica = () => {
    return (
        <StyledInformaticaSkills>
            <SectionSubtitle title='Informàtica'/>
            <FlexWrapper wrap='wrap' gap='0 70px'>
                <ActicContent>
                    <Image src={actic} alt="actic " width='100' height='60' objectFit='content'/>
                    <div>
                        <SkillTitle>Certificat ACTIC</SkillTitle>
                        <SkillSubtitle>Nivell 1</SkillSubtitle>
                    </div>
                </ActicContent>
                <OfficeContent>
                    <SkillTitle>Office</SkillTitle>
                    <SkillSubtitle>Nivell avançat:</SkillSubtitle>
                    <OfficeSkillsWrapper>
                        <Icon iconId='word' viewBox='-7 -12 50 50'/>
                        <Icon iconId='powerpoint' viewBox='-7 -12 50 50'/>
                        <Icon iconId='excel' viewBox='-7 -12 50 50'/>
                        <Icon iconId='access' viewBox='-7 -12 50 50'/>
                    </OfficeSkillsWrapper>
                </OfficeContent>
            </FlexWrapper>

        </StyledInformaticaSkills>
    );
};

const StyledInformaticaSkills = styled.div`

`

const ActicContent = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    gap: 0 30px;
    border: 3px dashed ${theme.colors.secondaryBgc};
    padding: 10px;
`

const OfficeContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 3px dashed ${theme.colors.secondaryBgc};
    padding: 10px;
`

const OfficeSkillsWrapper = styled.div`
    display: flex;
`

