import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _service:NewsapiService) { }
  businessheadingDisplay:any=[];

  ngOnInit(): void 
  { this._service.businessHeading().subscribe((result)=>
  {
    console.log(result);
    this.businessheadingDisplay=result.articles;
  }
  )

}}

