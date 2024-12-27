import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonSmhtConfigService } from './common-smht-config.service';
import * as i0 from "@angular/core";
export declare class CommonSmhtService {
    private httpClient;
    private configService;
    private config;
    private systemDateSubject;
    systemDate$: Observable<Date>;
    private showLoadingSubject;
    showLoadingObservable: Observable<boolean>;
    private messageSocketSubject;
    messageSocket$: Observable<any>;
    private languageSubject;
    language$: Observable<string>;
    constructor(httpClient: HttpClient, configService: CommonSmhtConfigService, config: any);
    getApiUrl(): string;
    setLanguage(lang: string): void;
    showLoading(isLoading: boolean): void;
    getDate(): Observable<any>;
    updateSystemDate(): void;
    modifyDateByUTC(date: any, isGetMethod: boolean): Date;
    getMessageSocket(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonSmhtService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommonSmhtService>;
}
