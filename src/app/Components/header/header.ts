import { Component } from '@angular/core';
import { Staticproducts } from '../Services/staticproducts';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [Staticproducts],
})
export class Header {
  constructor(private _staticProductsService: Staticproducts) {}
}
