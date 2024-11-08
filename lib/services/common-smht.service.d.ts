import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CommonSmhtService {
    private httpClient;
    private api;
    private systemDateSubject;
    systemDate$: Observable<Date>;
    private showLoadingSubject;
    showLoadingObservable: Observable<boolean>;
    showLoading(isLoading: boolean): void;
    constructor(httpClient: HttpClient);
    getDate(): Observable<any>;
    updateSystemDate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonSmhtService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommonSmhtService>;
}
