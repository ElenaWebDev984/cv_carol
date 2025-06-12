import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";
import {PerfilList} from "../sobreMi/SobreMe.tsx";
import {Container} from "../../../components/Container.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const Aficions = () => {
    return (
        <StyledAficions>
            <Container>
                <PerfilList>
                    <li>
                        <SectionSubtitle title='Aficions'/>
                    </li>
                    <li>Viatjar, lectura, cinema, cuinar,natació i caminar per la muntanya.</li>
                </PerfilList>
            </Container>
        </StyledAficions>
    );
};

const StyledAficions = styled.section`
    background-color: ${theme.colors.secondaryBgc};
`

