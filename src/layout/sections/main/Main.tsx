import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Image} from "../../../components/Image.tsx";
import {Container} from "../../../components/Container.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <p>Hola a tothom!!!</p>
                        <span>Soc Carol Tarrío Viñuales</span>
                        <p><span>Formadora</span>de cursos de formació ocupacional i de cursos per a empreses</p>
                    </div>

                    <Image src={photo} alt="photo"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    
`

