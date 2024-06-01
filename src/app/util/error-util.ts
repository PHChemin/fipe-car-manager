import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export class ErrorUtil {
    static handleError(error: HttpErrorResponse): Observable<string> {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro no lado do cliente ou erro de rede
          errorMessage = `Ocorreu um erro: ${error.error.message}`;
        } else {
          // Erro no lado do servidor
          errorMessage = `Erro de Servidor ${error.status}, ` + 
                         `mensagem: ${error.message}`;
        }
        return throwError(() => new Error(errorMessage));
      }
}