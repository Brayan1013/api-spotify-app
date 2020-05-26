import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotyAppService {


  urlBase: string = "https://api.spotify.com/v1/";
  urlToken: string = "https://spotyappb.herokuapp.com/token";
  token: string;
  prefix: string = "Bearer";
  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get(this.urlToken);
  }

  private getQuery(reference: string): Observable<any> {

    let url = `${this.urlBase}${reference}`;
    const header = new HttpHeaders({
      'Authorization': `${this.prefix} ${this.token}`
    })

    return this.http.get(url, { headers: header });

  }

  getNewRealeses(): Observable<any> {
    const reference = "browse/new-releases";
    return this.getQuery(reference)
      .pipe(map(data => {
        return data.albums.items
      }));

  }

  getArtist(idArtist: string): Observable<any> {
    const reference = `artists/${idArtist}`
    return this.getQuery(reference);
  }

  getTopTracksArtist(idArtist: string): Observable<any> {
    const reference = `artists/${idArtist}/top-tracks?country=US&limit=5`;
    return this.getQuery(reference).pipe(map(data => {
      return data.tracks
    }));
  }

  getArtistsBySearch(artist: string): Observable<any> {
    const reference = `search?q=${artist}&type=artist&limit=10`;
    return this.getQuery(reference).pipe(map(data => {
      return data.artists.items;
    }));
  }
}
