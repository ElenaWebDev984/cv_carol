import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {SobreMe} from "./layout/sections/sobreMi/SobreMe.tsx";
import {Experiencia} from "./layout/sections/experiencia/Experiencia.tsx";
import {Formacio} from "./layout/sections/formacio/Formacio.tsx";
import {Treball} from "./layout/sections/treball/Treball.tsx";
import {Aficions} from "./layout/sections/aficions/Aficions.tsx";




export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SobreMe/>
            <Aficions/>
            <Experiencia/>
            <Treball/>
            <Formacio/>
            {/*<Testimony/>*/}
            {/*<Contacte/>*/}
            <Footer/>
        </div>
    )
}



