export type EducationDataTypes = {
    id: number;
    curs: string;
    moduls: string;
    empresa: string;
    hores: string;
    dates: string;
}

export const educationData: EducationDataTypes[] = [
    {
        id: 1,
        curs: "Diplomatura de T.E.A.T.",
        moduls: `Tècnica d’Empreses i Activitats Turístiques`,
        empresa: `UdG (Univ. de Girona), “Escola Oficial de Turisme - Generalitat de Catalunya”`,
        hores: "",
        dates: "Setembre de 1998",
    },
    {
        id: 2,
        curs: `(M.B.A.) “Màster en Gestió d’Empreses Turístiques”`,
        moduls: `"Hospedatge, Restauració i Oci"`,
        empresa: `“Universitat Rovira i Virgili”`,
        hores: "350 hores",
        dates: "Curs 98 – 99",
    },

];