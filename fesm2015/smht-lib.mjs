import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as i1 from '@angular/common/http';

class CommonSmhtConfigService {
    constructor() {
        this.config = {};
    }
    setConfig(config) {
        this.config = config;
    }
    getConfig(key) {
        if (!this.config[key]) {
            throw new Error(`Configuration key "${key}" is not set.`);
        }
        return this.config[key];
    }
}
CommonSmhtConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonSmhtConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CommonSmhtService {
    constructor(httpClient, configService, config) {
        this.httpClient = httpClient;
        this.configService = configService;
        this.config = config;
        this.systemDateSubject = new BehaviorSubject(null);
        this.systemDate$ = this.systemDateSubject.asObservable().pipe(switchMap((date) => {
            if (date === null) {
                return this.getDate().pipe(tap(fetchedDate => this.systemDateSubject.next(this.modifyDateByUTC(new Date(fetchedDate.dataResult), true))));
            }
            else {
                return of(date);
            }
        }));
        this.showLoadingSubject = new BehaviorSubject(false);
        this.showLoadingObservable = this.showLoadingSubject.asObservable();
        this.messageSocketSubject = new BehaviorSubject(null);
        this.messageSocket$ = this.messageSocketSubject.asObservable();
        this.languageSubject = new BehaviorSubject(localStorage.getItem('language') || 'en');
        this.language$ = this.languageSubject.asObservable();
        this.configService.setConfig(this.config);
    }
    getApiUrl() {
        return this.configService.getConfig('apiUrl');
    }
    setLanguage(lang) {
        this.languageSubject.next(lang);
    }
    showLoading(isLoading) {
        this.showLoadingSubject.next(isLoading);
    }
    getDate() {
        return this.httpClient.get(this.getApiUrl() + '/api/sys/getWorkingDate');
    }
    updateSystemDate() {
        this.getDate().pipe(tap(fetchedDate => this.systemDateSubject.next(fetchedDate.dataResult))).subscribe();
    }
    modifyDateByUTC(date, isGetMethod) {
        const localUTC = (new Date().getTimezoneOffset() / 60);
        const data = new Date(date);
        data.setHours(data.getHours() + (!isGetMethod ? -localUTC : localUTC));
        return data;
    }
    getMessageSocket(data) {
        this.messageSocketSubject.next(data);
    }
}
CommonSmhtService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, deps: [{ token: i1.HttpClient }, { token: CommonSmhtConfigService }, { token: 'CommonSmhtConfigService' }], target: i0.ɵɵFactoryTarget.Injectable });
CommonSmhtService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: CommonSmhtConfigService }, { type: undefined, decorators: [{
                        type: Inject,
                        args: ['CommonSmhtConfigService']
                    }] }];
    } });

class SmhtLibModule {
    static forRoot(config) {
        return {
            ngModule: SmhtLibModule,
            providers: [
                {
                    provide: 'CommonSmhtConfig',
                    useValue: config,
                },
                CommonSmhtConfigService,
            ],
        };
    }
}
SmhtLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SmhtLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SmhtLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: SmhtLibModule });
SmhtLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SmhtLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SmhtLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CommonSmhtConfigService, CommonSmhtService, SmhtLibModule };
//# sourceMappingURL=smht-lib.mjs.map
