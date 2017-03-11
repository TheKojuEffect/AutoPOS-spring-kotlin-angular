import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ReceiptComponent } from './receipt.component';
import { ReceiptDetailComponent } from './receipt-detail.component';
import { ReceiptPopupComponent } from './receipt-dialog.component';
import { ReceiptDeletePopupComponent } from './receipt-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ReceiptResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const receiptRoute: Routes = [
  {
    path: 'receipt',
    component: ReceiptComponent,
    resolve: {
      'pagingParams': ReceiptResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'autoPosApp.receipt.home.title'
    }
  }, {
    path: 'receipt/:id',
    component: ReceiptDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'autoPosApp.receipt.home.title'
    }
  }
];

export const receiptPopupRoute: Routes = [
  {
    path: 'receipt-new',
    component: ReceiptPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'autoPosApp.receipt.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'receipt/:id/edit',
    component: ReceiptPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'autoPosApp.receipt.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'receipt/:id/delete',
    component: ReceiptDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'autoPosApp.receipt.home.title'
    },
    outlet: 'popup'
  }
];