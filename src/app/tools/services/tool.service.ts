import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tool } from '../../store/models/tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  baseUrl: string =
  "https://us-central1-easy-tools-e0a4b.cloudfunctions.net/api";

  constructor(private http: HttpClient) { }

  getAllTools = () => {
    return this.http.get<Tool[]>(`${this.baseUrl}/tools`, {
      headers: {
        "Content-Type": 'application/json'
      }
    })
  }
}
