import { Injectable } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class Staticproducts {
  products: Iproduct[];
  filteredProducts: Iproduct[];
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell Laptop',
        price: 50000,
        quantity: 1,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 200,
        name: 'Assus Laptop',
        price: 50000,
        quantity: 0,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 300,
        name: 'Lenovo Laptop',
        price: 50000,
        quantity: 2,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 400,
        name: 'Iphone',
        price: 50000,
        quantity: 3,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 3,
      },
      {
        id: 500,
        name: 'MSI Laptop',
        price: 50000,
        quantity: 3,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 600,
        name: 'Watch ',
        price: 50000,
        quantity: 3,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 2,
      },
      {
        id: 700,
        name: 'AirPods',
        price: 50000,
        quantity: 4,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 4,
      },
    ];
    this.filteredProducts = this.products;
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductById(id: number): Iproduct | null {
    let foundProduct = this.products.find((p) => p.id == id);
    return foundProduct ? foundProduct : null;
  }
  filterProductsByCategoryId(catId: number): Iproduct[] {
    return this.products.filter((p) => p.catId == catId);
  }
}
