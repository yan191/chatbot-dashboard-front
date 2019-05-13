import { AlertTipo } from './alert-tipo.enum';

export interface Alert {
    mensagem: string,
    tipo: AlertTipo
}
