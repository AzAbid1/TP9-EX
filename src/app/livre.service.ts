import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from './livre';

const URL = 'http://localhost:3000/livres';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(URL);
  }
  addLivres(l: Livre): Observable<Livre> {
    return this.http.post<Livre>(URL, l);
  }
  updateLivre(id: number, l: Livre): Observable<Livre> {
    return this.http.put<Livre>(URL + "/" + id, l);
  }

  deleteLivre(id: number) {
    return this.http.delete(URL + "/" + id);
  }

}
