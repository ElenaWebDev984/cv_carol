import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Photo} from "../../../components/Photo.tsx";
import photo2 from './../../../assets/images/photo2.jpg'


export const Perfil = () => {
    return (
       <FlexWrapper>
           <Photo src={photo2} alt="photo"/>
           <ul>
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
           </ul>
       </FlexWrapper>
    );
};

