import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staticproducts } from '../Services/staticproducts';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  currentId: number = 0;
  product: Iproduct | null = null;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _staticProductsService: Staticproducts
  ) {}
  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._staticProductsService.getProductById(this.currentId);
  }
}
