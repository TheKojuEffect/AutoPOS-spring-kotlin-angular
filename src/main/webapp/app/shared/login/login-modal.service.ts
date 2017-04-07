import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AposLoginModalComponent } from './login.component';

@Injectable()
export class LoginModalService {
    private isOpen = false;

    constructor(private modalService: NgbModal) {
    }

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        let modalRef = this.modalService.open(AposLoginModalComponent);
        modalRef.result.then(result => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }
}
