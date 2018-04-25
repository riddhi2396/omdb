import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	title: boolean;
  id:boolean;
  keyword:boolean;
  titleUrl:string;
  recentSearch = [];
  

  constructor(private router: Router, private _movieservice: MovieService) { }

  ngOnInit() {
      if(localStorage.getItem('recentsearch') != null){
        this.recentSearch = JSON.parse(localStorage.getItem('recentsearch'));
      }
  }
  onSubmit(form: any, submitted:boolean){
    
    
    if(submitted){  
    if(this.title){
    
      this.titleUrl = "t="+ form.title;
      if(form.year != ""){
        this.titleUrl += "&y=" + form.year;
      }
      if(form.plot != ""){
        this.titleUrl += "&plot=" + form.plot;
      }
     console.log(this.titleUrl);
    }
    else if(this.id){
       
      this.titleUrl = "i=" + form.title;
      if(form.plot != ""){
        this.titleUrl += "&plot=" + form.plot;
      }
      console.log(this.titleUrl);
    }
    else if(this.keyword){
     this.titleUrl = "s="+ form.title;
     if(form.year != ""){
        this.titleUrl += "&y=" + form.year;
      }
    }
    form.url = this.titleUrl;
 
    console.log(form);
    
    if(this.recentSearch && this.recentSearch.length < 5){
      this.recentSearch.push(form);
      localStorage.setItem('recentsearch', JSON.stringify(this.recentSearch));
      
    }
    else{
      this.recentSearch.splice(0, 1);
      this.recentSearch.push(form);
      localStorage.setItem('recentsearch', JSON.stringify(this.recentSearch))
    }

    this.router.navigate(['/response', this.titleUrl]);
   }
  }

  onSelectSearch(search: string){
    this.title = false;
    this.id= false;
    this.keyword = false;

    if(search === 'title'){
      this.title = true;
    } else if(search === 'id'){
      this.id = true;
    }else if(search === 'keyword'){
      this.keyword = true;

    }


  }
  SearchForRecent(form: any){
    console.log(form);
    // this._movieservice.getmovie(form.url);
    this.router.navigate(['/response', form.url]);

  }
      
      


   
    
      



      



}
    
    
    
     
     
     

       

      
    
      
    
      
  
