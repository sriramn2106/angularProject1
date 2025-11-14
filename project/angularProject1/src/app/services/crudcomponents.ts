import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Snackbar from 'awesome-snackbar';

@Injectable({
  providedIn: 'root',
})
export class Crudcomponents {

  url = 'http://localhost:3000/employees'

  constructor(private http: HttpClient) { }


  getEmployees() {
    return this.http.get<any[]>(this.url);
   
  }

  createEmployee(data: any) {
    return this.http.post(this.url, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(id: string, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  loadingSnack: any = null;

showLoading(message: string = 'Loading...') {
  this.loadingSnack = new Snackbar(
    `<span style="display:flex;align-items:center;gap:8px;">
        <span class="spinner"></span> ${message}
     </span>`,
    {
      position: 'top-center',
      theme: 'light',
      timeout: 0,    // stays until closed manually
      actionText: ''
    }
  );
}

hideLoading() {
  if (this.loadingSnack) {
    this.loadingSnack.close();
    this.loadingSnack = null;
  }
}
}
