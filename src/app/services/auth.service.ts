import { HttpResponse } from "@angular/common/http";
import { AuthResponseModel } from "../models/auth-response.model";

export class AuthService {
    authenticate(username: string, password: string) {
        if (username === 'nagarjuna@gmail.com' && password === '7777777777') {
            let authResponse: AuthResponseModel = {id: 1, name: 'Nagarjuna Mule', email:'nagarjuna@gmail.com', role: 'admin', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'};
            return new HttpResponse({status: 200, statusText: 'Login successfully...#',body: authResponse});
        }
        else if(username === 'naveen@gmail.com' && password === '12345678910') {
            let authResponse: AuthResponseModel = { id: 1, name: 'Naveen Mule', email: 'naveen@gmail.com', role: 'user', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.GdH5vymphXOsKTAdiT7BrWeQqYKTeYgio-Hc4u1D3Ys'};
            return new HttpResponse({ status: 200, statusText: 'Login successfully..#', body: authResponse});
        }
        else {
            return new HttpResponse({ status: 400, statusText: 'Inavalid Credentials...#', body: null});
        }
    }
    get name() {
        return localStorage.getItem('name');
    }
    get role() {
        return localStorage.getItem('role');
    }
    get token() {
        return localStorage.getItem('token');
    }
}