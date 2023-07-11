export class Token {
    success: string;
    token: string;
    usuario: {}

    constructor(success: string, token: string, usuario: any) {
        this.success = success;
        this.token = token;
        this. usuario = usuario;
    }
}
