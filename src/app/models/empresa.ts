export class Empresas {
    cuit: string;
    razonsocial: string;
    domicilio: string;
    mail: string;
    telefono: string;
    contacto: string;
    id: number;

    constructor(cuit: string,razonsocial: string,domicilio: string,mail: string,telefono: string,contacto: string,id: number){
        this.contacto = contacto;
        this.cuit = cuit;
        this.domicilio = domicilio;
        this.id = id;
        this.mail = mail;
        this.razonsocial = razonsocial;
        this.telefono = telefono;
    }
}
