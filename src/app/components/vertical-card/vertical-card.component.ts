import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.css'
})
export class VerticalCardComponent implements OnInit {

  @Input()
  photoCover:string = 'https://secureservercdn.net/166.62.110.60/h65.3a1.myftpupload.com/wp-content/uploads/2021/09/variable-placeholder-product-31.jpg?time=1644500349';

  @Input()
  photoAlt:string = 'Imagem';

  @Input()
  cardDate:string = 'DD de Mês, AAAA'

  @Input()
  cardTitle:string = 'Título';

  @Input()
  id:string = '0';

  ngOnInit(): void {
  }

}
