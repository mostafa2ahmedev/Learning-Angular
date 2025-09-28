import { Component } from '@angular/core';
import { Staticproducts } from '../Services/staticproducts';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [Staticproducts],
})
export class Header {

 constructor(private _staticProductsService: Staticproducts) {}
}
