import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class MovieService {
	private url = "https://www.omdbapi.com/?apikey=786fe4ce&";

  constructor(private _http: Http) { }

  getmovie(title:string){
  	return this._http.get(this.url + title)
  	.map((response:Response) => response.json());


  }

}
