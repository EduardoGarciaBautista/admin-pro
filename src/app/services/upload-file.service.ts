import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }
  async updateImage(file: File, type: 'users'| 'medicos' | 'hospitals', id: string): Promise<boolean | string> {
    try {
      const url = `${environment.HOST_URL}upload/${type}/${id}`;
      const formData = new FormData();
      formData.append('image', file);

      const request = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });
      const data = await request.json();
      if (data.ok) {
        return data.fileName
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
