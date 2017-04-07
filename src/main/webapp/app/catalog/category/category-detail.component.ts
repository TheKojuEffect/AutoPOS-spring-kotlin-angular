import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
    selector: 'apos-category-detail',
    templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent implements OnInit, OnDestroy {

    category: Category;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(private eventManager: EventManager,
                private jhiLanguageService: JhiLanguageService,
                private categoryService: CategoryService,
                private route: ActivatedRoute) {
        this.jhiLanguageService.setLocations(['category']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
        this.registerChangeInCategories();
    }

    load(id) {
        this.categoryService.find(id).subscribe(category => {
            this.category = category;
        });
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCategories() {
        this.eventSubscriber = this.eventManager.subscribe('categoryListModification', response => this.load(this.category.id));
    }

}
