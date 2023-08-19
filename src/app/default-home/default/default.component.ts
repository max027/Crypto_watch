import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  coin_list=['bitcoin','ethereum','bitcoin-cash','stellar','litecoin','cardano']
  baseUrl='https://api.coincap.io/v2/assets/'
  Coin:{[key:string]:{name: string; last: string; change: string; cap: string }}={}
  async getCoin(coin_list:string[]){
    for(const a of coin_list){
      const response=await fetch(`${this.baseUrl}${a}`)
      const data=await response.json()
      this.Coin[a]={name:data.data.id,last:parseFloat(data.data.priceUsd).toFixed(3),change:parseFloat(data.data.changePercent24Hr).toFixed(2),cap:parseFloat(data.data.marketCapUsd).toFixed(2)}
    }
  }
  
  ngOnInit(): void {
   this.getCoin(this.coin_list) 
  }
}
