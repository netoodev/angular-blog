import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = 'https://secureservercdn.net/166.62.110.60/h65.3a1.myftpupload.com/wp-content/uploads/2021/09/variable-placeholder-product-31.jpg?time=1644500349';

  @Input()
  cardDate:string = 'DD de Mês, AAAA'

  @Input()
  cardTitle:string = 'Título';

  @Input()
  cardDescription:string = 'Descrição';

  @Input()
  cardSrc:string = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
