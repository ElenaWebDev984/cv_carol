import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Image} from "../../../components/Image.tsx";
import photo2 from '../../../assets/images/photo2.webp'
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import { Container } from "../../../components/Container.tsx";
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";


export const SobreMe = () => {
    return (
        <StyledSobreMe>
            <Container>
                <SectionTitle title='Sobre mi' />
                <SobreMeContent>
                    <Image src={photo2} alt="photo" borderRadius={'10%'}/>
                    <FlexWrapper direction='column' justify="space-around" align={'center'} wrap={'wrap'}>
                        <PerfilList>
                            <li>
                                <SectionSubtitle title='Perfil'/>
                            </li>
                            <li>Actitud responsable i resolutiva.</li>
                            <li>Habilitats interpersonals.</li>
                            <li>Interès pel desenvolupament professional.</li>
                            <li>Flexibilitat</li>
                            <li>Facilitat d’adaptació al canvi.</li>
                            <li>Persona proactiva i dinàmica.</li>
                            <li>Persona oberta i optimista amb facilitat per a contagiar l’entusiasme.</li>
                            <li>Persona formal i compromesa amb el lloc de feina i l’empresa.</li>
                            <li>Nivell avançat d’office.</li>
                            <li>Disseny de cursos.</li>
                            <li>Experiència a les aules.</li>
                        </PerfilList>
                        <PerfilList>
                            <li>
                                <SectionSubtitle title='Aficions'/>
                            </li>
                            <li>Viatjar, lectura, cinema, cuinar,natació i caminar per la muntanya.</li>
                        </PerfilList>
                    </FlexWrapper>
                </SobreMeContent>
            </Container>
        </StyledSobreMe>
    );
};

const StyledSobreMe = styled.section`

`

const SobreMeContent = styled.div`
    display: flex;
    gap: 100px;
    justify-content: space-around;
`

const PerfilList = styled.ul`
    li {
        text-align: left;
    }
    
    li {
        font-weight: 400;
        font-size: 24px;
    }
`


