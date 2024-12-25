import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as i1 from '@angular/common/http';

class CommonSmhtService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.api = 'https://lotus-uat.fourier.group/fo-api';
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
    }
    setLanguage(lang) {
        this.languageSubject.next(lang);
    }
    showLoading(isLoading) {
        this.showLoadingSubject.next(isLoading);
    }
    getDate() {
        return this.httpClient.get(this.api + '/api/sys/getWorkingDate');
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
CommonSmhtService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
CommonSmhtService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { CommonSmhtService };
//# sourceMappingURL=smht-lib.mjs.map
