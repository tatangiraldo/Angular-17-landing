import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IProduct } from '../../../Models/Iproduct.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{  
  
  loading: boolean = true
  public product?: IProduct

  private _route = inject(ActivatedRoute)
  private _service = inject(ApiService)

  ngOnInit(){
    this._route.params.subscribe( params => {
      this._service.getProd(params['id']).subscribe( (data: IProduct) => {
        this.product = data
        this.loading = false
      })
    } )
  }

}
