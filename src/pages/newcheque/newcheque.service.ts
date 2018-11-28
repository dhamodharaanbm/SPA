import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewChequeService
{
    constructor(private http: HttpClient) { }

    fundCheque(newUserRegistration, newUrl)
    {
        return this.http.post(
            newUrl,
            newUserRegistration,
            );
    }
}

