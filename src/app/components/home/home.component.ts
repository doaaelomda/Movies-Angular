import { MovieapiService } from './../../services/movieapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private MovieapiService:MovieapiService){}
  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
  bannerData(){
    this.MovieapiService.bannerApiData().subscribe(res=>{
      this. bannerResult=res.results
    })
  }
  trendingData() {
    this.MovieapiService.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;

    });
  }
  actionMovie() {
    this.MovieapiService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie() {
    this.MovieapiService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
  animationMovie() {
    this.MovieapiService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  comedyMovie() {
    this.MovieapiService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  documentaryMovie() {
    this.MovieapiService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }
  sciencefictionMovie() {
    this.MovieapiService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }
  thrillerMovie() {
    this.MovieapiService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }


}
