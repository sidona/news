import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../exchange.service";

@Component({
  selector: 'app-live-exchange',
  templateUrl: './live-exchange.component.html',
  styleUrls: ['./live-exchange.component.css']
})
export class LiveExchangeComponent implements OnInit {
  euroExchange:any;
  currentExchangeEuro:any;
  dollarExchange:any;
  currentExchangeDollar:any;
  location = {};
  setPosition(position){
    this.location = position.coords;
    console.log(position.coords);
  }

  constructor( private service:ExchangeService) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }

    this.service.readService('http://www.bnr.ro/RSS_200003_EUR.aspx')
      .subscribe(result=>{
        this.euroExchange=result.items;
        this.currentExchangeEuro=this.euroExchange[0].title;
        console.log(this.euroExchange[0].title)

      });
    this.service.readService('http://www.bnr.ro/RSS_200004_USD.aspx')
      .subscribe(result=>{
        this.dollarExchange=result.items;
        this.currentExchangeDollar=this.dollarExchange[0].title;
      })
  }


}
