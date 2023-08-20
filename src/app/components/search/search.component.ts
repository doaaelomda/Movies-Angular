import { MovieapiService } from './../../services/movieapi.service';
import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private MovieapiService:MovieapiService){}
  searchResult:any=[]
  searchForm =new FormGroup({
    'movieName':new FormControl(null)
  })
  submitForm(){
    this.MovieapiService.getSearchMovie(this.searchForm.value).subscribe(res=>{
      this.searchResult=res.results
    })

  }
}
