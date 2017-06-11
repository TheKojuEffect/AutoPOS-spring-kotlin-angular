import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, EventManager } from 'ng-jhipster';

import { Brand } from './brand.model';
import { BrandPopupService } from './brand-popup.service';
import { BrandService } from './brand.service';

@Component({
    selector: 'apos-brand-delete-dialog',
    templateUrl: './brand-delete-dialog.component.html'
})
export class BrandDeleteDialogComponent {

    brand: Brand;

    constructor(private brandService: BrandService,
                public activeModal: NgbActiveModal,
                private alertService: AlertService,
                private eventManager: EventManager) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.brandService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'brandListModification',
                content: 'Deleted an brand'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('autoPosApp.brand.deleted', {param: id}, null);
    }
}

@Component({
    selector: 'apos-brand-delete-popup',
    template: ''
})
export class BrandDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(private route: ActivatedRoute,
                private brandPopupService: BrandPopupService) {
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.brandPopupService
                .open(BrandDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
