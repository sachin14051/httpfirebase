import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/Ipost';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postUrl = `${environment.baseUrl}/posts.json`
  constructor(private _http: HttpClient,
  ) { }

  getAllposts(): Observable<Ipost[]> {
    return this._http.get<Array<Ipost>>(this.postUrl).pipe(
      map(ele => {
        
        let postArray : Array<Ipost> =[]
        for (const key in ele) {
          let obj :Ipost = {
            title: ele[key].title,
            content: ele[key].content,
            userId: ele[key].userId,
            name: key
          }
          postArray.push(obj) 
        }
        return postArray
      }))
  }
// ///////////////////
  addposts(obj: Ipost): Observable<Ipost> {
    return this._http.post<Ipost>(this.postUrl, obj)

  }
  ///////////////////////////
  editPost(id:string){
    return this._http.patch<Ipost>(this.postUrl,id)
              //  .subscribe(res =>console.log(res))
                
  }
}
