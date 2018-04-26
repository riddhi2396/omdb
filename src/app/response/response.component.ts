import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
	moviedetail:any;
	title: string;
	message: boolean = false;
  totalPages: number;
  currentPage: number;
  movieDetailArray = [];
  total:boolean;
  results: number;
  count: number = 1;
  error:boolean;
	
  constructor(private route: ActivatedRoute, private _movieservice: MovieService, private router: Router) { }

  ngOnInit() {
    this.error = false;
    this.currentPage = 1;
  	this.route.params.subscribe(params => {
      this.title=(params['title']);
    });
  	this._movieservice.getmovie(this.title)
  		.subscribe((res) => {
        if(res.Response === "False"){
          this.error = true;
          this.moviedetail = res;
        }
        if(res.Search){
          this.movieDetailArray = res.Search;
          this.message = true;
          if(res.totalResults && res.totalResults > 10){
            this.total = true;
            this.results = res.totalResults;
          }
        }
        else{
          this.moviedetail = res;
        }
  		});
  }
        
  FindByPages(){
    let url = this.router.url;
     if(this.total){
       this.results = this.results - 10;
       if(this.results - 10< 0){
         this.total = false;
        }
        let newUrl = "";
        this.count++;
        newUrl= this.title + "&page=" + this.count
      
        this._movieservice.getmovie(newUrl)
         .subscribe((res) => {
           this.movieDetailArray = res.Search;
          });
      }
  }
}

    