import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../exchange.service";

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  news:any;

  constructor( private service:ExchangeService) { }

  ngOnInit() {
    this.service.readService('http://www.businessmagazin.ro/rss-feed.xml')
      .subscribe(result=>{
       this.news=result.items;
        console.log(this.news)

      });
  }

}
