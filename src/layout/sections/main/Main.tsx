import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Image} from "../../../components/Image.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <Greeting>Hola a tothom!!!</Greeting>
                        <Name>Soc <span>Carol Tarrío Viñuales</span></Name>
                        <MainTitle>Formadora de cursos de formació ocupacional i de cursos per a empreses</MainTitle>
                    </div>

                    <Image src={photo} alt="photo"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const Greeting = styled.span`
    font-weight: 400;
    font-size: 28px;
    color: ${theme.colors.holaFont};
`

const Name = styled.p`
    font-family: Nunito, sans-serif;
    font-weight: 700;
    font-size: 50px;
    text-transform: capitalize;
    margin: 15px 0;
    
    span {
        color: ${theme.colors.accentColor};
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 30px;
    vertical-align: middle;
    //text-transform: lowercase;

`

