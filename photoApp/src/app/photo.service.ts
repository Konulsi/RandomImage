import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CallResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  baseUrl: string = 'https://api.unsplash.com';
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<CallResponse>(`${this.baseUrl}/photos/random`, {
      headers: {
        Authorization: 'Client-ID BcVyzgoniAuPYwSwXf_g8iIjTVCaYsnzJrrI4_V-QNE',
      },
    });
  }
}
