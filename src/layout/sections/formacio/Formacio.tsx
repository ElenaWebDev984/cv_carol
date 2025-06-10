import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FormacioUni} from "./FormacioUni.tsx";
import {FormacioComplementaria} from "./FormacioComplementaria.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Idiomes} from "./Idiomes.tsx";
import {Informatica} from "./Informatica.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Formacio = () => {
    return (
        <StyledFormacio>
            <Container>
               <FlexWrapper direction='column'>
                   <SectionTitle title='Formació' />
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