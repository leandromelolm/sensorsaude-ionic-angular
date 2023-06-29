import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from "../config/api.config";
import { Establishment } from "./model/establishment";
import { Observable } from 'rxjs';

@Injectable()
export class EstabelecimentoService{

    protected http_headers = new HttpHeaders();

    constructor(public http:HttpClient){   
        this.http_headers.set('Accept','application/json');     
    }

    findAll() : Observable<Establishment[]>{        
        return this.http.get<Establishment[]>(`${API_CONFIG.baseUrl}/estabelecimentos`, {headers: this.http_headers});
    }
}