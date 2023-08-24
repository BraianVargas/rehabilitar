export class Patient {
    apellidos: string;
    celular: string;
    documento: string;
    domicilio: string;
    fecha_nacimiento: string;
    id: number;
    nombres: string;
    telefono: string;

    constructor(apellidos: string, celular: string, documento: string, domicilio: string, fecha_nacimiento: string, id: number, nombres: string, telefono: string) {
        this.apellidos = apellidos;
        this.celular = celular;
        this.documento = documento;
        this.domicilio = domicilio;
        this.fecha_nacimiento = fecha_nacimiento;
        this.id = id;
        this.nombres = nombres;
        this.telefono = telefono;
    }
}