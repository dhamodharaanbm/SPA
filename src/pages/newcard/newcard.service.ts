import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewCardService
{
    constructor(private http: HttpClient) { }

   fundCard(newUserRegistration, newUrl)
    {
        return this.http.post(
            newUrl,
            newUserRegistration,
            );
    }
}

