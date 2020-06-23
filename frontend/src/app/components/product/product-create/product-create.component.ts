import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  prop = "qualquer"

  constructor() { }

  ngOnInit(): void {
  }
  
  fazendoAlgo(): void {
    console.log('fazendo algo')
  }

}
