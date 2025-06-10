import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FormacioUni} from "./FormacioUni.tsx";
import {FormacioComplementaria} from "./FormacioComplementaria.tsx";
import {Title} from "../../../components/Title.tsx";
import {Idiomes} from "./Idiomes.tsx";
import {Informatica} from "./Informatica.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Formacio = () => {
    return (
        <StyledFormacio>
            <Container>
               <FlexWrapper direction='column'>
                   <Title title='Formació' />
                   <FormacioUni/>
                   <FormacioComplementaria/>
                   <Idiomes/>
                   <Informatica/>
               </FlexWrapper>
            </Container>
        </StyledFormacio>
    );
};

const StyledFormacio = styled.section`

`