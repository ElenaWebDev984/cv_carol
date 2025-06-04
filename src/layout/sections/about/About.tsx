import styled from "styled-components";
import {AboutGridWrapper} from "./AboutGridWrapper.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <AboutContent>
                <AboutTitle>About Me</AboutTitle>
                <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutText>
                <AboutTitle>Work Experience</AboutTitle>
                <AboutGridWrapper>

                </AboutGridWrapper>
                <AboutTitle>Education</AboutTitle>
                <AboutGridWrapper>

                </AboutGridWrapper>
            </AboutContent>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
`

const AboutContent = styled.div`

`

const AboutTitle = styled.h2`

`

const AboutText = styled.p`

`

