import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css'
})
export class TrendingCardComponent implements OnInit{

  @Input()
  photoCover:string = 'https://secureservercdn.net/166.62.110.60/h65.3a1.myftpupload.com/wp-content/uploads/2021/09/variable-placeholder-product-31.jpg?time=1644500349';

  @Input()
  cardTitle:string = 'Título';

  @Input()
  cardDescription:string = 'Descrição';

  @Input()
  cardUrl:string = 'Link';

  @Input()
  id:string = '0';

  ngOnInit(): void {
  }

}
