export type EducationComplementariaDataTypes = {
    id: number;
    curs: string;
    moduls: string;
    empresa: string;
    hores: string;
    dates: string;
}

export const educationComplementariaData: EducationComplementariaDataTypes[] = [
    {
        id: 1,
        curs: '“Certificat d’Aptitud Pedagògica” (CAP)',
        moduls: ``,
        empresa: `“Institut de Ciències de l'Educació de la Universitat Rovira i Virgili”`,
        hores: "300 hores",
        dates: "Abril de l’any 2000",
    },
    {
        id: 2,
        curs: `Curs “SSCE002PO - ACREDITACIÓ DOCENT PER A TELEFORMACIÓ: FORMADOR/A ON LINE”`,
        moduls: ``,
        empresa: `Formació impartida pel “Sistema de Formación Profesional para el Empleo” en el marc de la &quot;Resolución de 18 de enero de 2019, del Servicio Público de Empleo Estatal (SEPE).`,
        hores: "60 hores",
        dates: "",
    },
    {
        id: 3,
        curs: '“Curs de Prevenció de Riscos Laborals”',
        moduls: `Nivell Bàsic`,
        empresa: `“CEPTA” (Confederació Empresarial de la Província de Tarragona), - Organitzat pel “Departament de Treball, Indústria, Comerç i Turisme”`,
        hores: "62 hores",
        dates: "",
    },
    {
        id: 4,
        curs: 'Seminari de Protocol',
        moduls: ``,
        empresa: `“Euroaula”`,
        hores: "16 hores",
        dates: "1996",
    },
];