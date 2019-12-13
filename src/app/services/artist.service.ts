import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../artist.model';



const localUrl = "http://localhost:3000/api/artists";

@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtistInformation(): Observable<any> {
    return this.http.get(localUrl);
    }

    AddArtistInformation(name:string,song:string,image:string):Observable<any>{
      const artist:Artist = {name:name,song:song,image:image};
      return this.http.post(localUrl, Artist);
      }

      DeleteArtist(id:String):Observable<any>{
        return this.http.delete(localUrl+'/'+id);
      }

      GetArtist(id:String):Observable<any>{
        return this.http.get(localUrl+'/'+id);
      }

      UpdateArtist(id:String,name:string,song:string,image:string):Observable<any>{
        const artist:Artist = {name:name,song:song,image:image};
        console.log("Edit"+id);
        return this.http.put(localUrl+'/'+id, artist);
      }

}

