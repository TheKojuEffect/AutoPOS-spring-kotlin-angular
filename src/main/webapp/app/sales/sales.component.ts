import { Component } from '@angular/core';
import { SaleService } from './sale.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './sales.component.html'
})
export class SalesComponent {

    constructor(private saleService: SaleService,
                private router: Router) {
    }



}
