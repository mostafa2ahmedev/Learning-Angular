import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './Components/products/products';
import { Footer } from './Components/footer/footer';
import { Header } from './Components/header/header';
import { Order } from './Components/order/order';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products, Footer, Header, Order],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('ecommerceApp');
}
