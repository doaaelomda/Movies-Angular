import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MovieapiService } from './../../services/movieapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movedetails',
  templateUrl: './movedetails.component.html',
  styleUrls: ['./movedetails.component.css']
})
export class MovedetailsComponent implements OnInit {
  constructor(private MovieapiService:MovieapiService,private Routes:ActivatedRoute){}
  getMovieDetailResult:any=[]
  getMovieCastResult:any=[]
  getMovieVideoResult:any=[]

  getMovie(id:any){
    this.MovieapiService.getMovieDetails(id).subscribe(async(result:any)=>{
        this.getMovieDetailResult = await result;})
    }
    getVideo(id:any)
    {
      this.MovieapiService.getMovieVideo(id).subscribe((result)=>{
          result.results.forEach((element:any) => {
              if(element.type=="Trailer")
              {
                this.getMovieVideoResult = element.key;
              }
          });
  
      });
    }
  getMovieCast(id:any){
      this.MovieapiService.getMovieCast(id).subscribe((result)=>{
        this.getMovieCastResult = result.cast;
      });
    }
    ngOnInit(): void {
      let getparamId = this.Routes.snapshot.paramMap.get('id')
      this.getMovie(getparamId)
      this.getVideo(getparamId)
      this.getMovieCast(getparamId)
    }
}
