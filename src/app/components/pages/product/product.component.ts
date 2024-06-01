import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IProduct } from '../../../Models/Iproduct.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  
  productList: IProduct[] = []
  private _service = inject(ApiService)
  private _router = inject(Router)
  
  ngOnInit(): void {
    this._service.getProds().subscribe((data: IProduct[]) => {
      this.productList = data
    })
  }

  goto(id: number){
    this._router.navigate(['/products', id])
  }
}
