import styled from "styled-components";
import {ExperienciaLaboral} from "./ExperienciaLaboral.tsx";
import {Container} from "../../../components/Container.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Experiencia = () => {
    return (
        <StyledExperiencia>
            <Container>
                <ExperienciaContent>
                    <FlexWrapper direction="column">
                        <SectionTitle title='Experiència Laboral' />
                        <ExperienciaText>Des del 2016 i fins l’actualitat, imparteixo cursos de formació ocupacional adreçats a persones en atur de totes les edats i cursos a empreses, per a treballadors en actiu:</ExperienciaText>
                        <ExperienciaLaboral/>
                    </FlexWrapper>
                </ExperienciaContent>
            </Container>
        </StyledExperiencia>
    );
};

const StyledExperiencia = styled.section`
    min-height: 100vh;
`

const ExperienciaContent = styled.div`

`

const ExperienciaText = styled.p`
    font-family: Nunito,sans-serif;
    text-align: left;
    font-weight: 400;
    font-size: 24px;
    color: ${theme.colors.formFont};
    margin-bottom: 50px;
`

