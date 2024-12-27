import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./common-smht-config.service";
export class CommonSmhtService {
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
CommonSmhtService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, deps: [{ token: i1.HttpClient }, { token: i2.CommonSmhtConfigService }, { token: 'CommonSmhtConfigService' }], target: i0.ɵɵFactoryTarget.Injectable });
CommonSmhtService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.CommonSmhtConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['CommonSmhtConfigService']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNtaHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NtaHQtbGliL3NyYy9saWIvc2VydmljZXMvY29tbW9uLXNtaHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFvQixFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU1oRCxNQUFNLE9BQU8saUJBQWlCO0lBdUI1QixZQUNVLFVBQXNCLEVBQ3RCLGFBQXNDLEVBQ0gsTUFBVztRQUY5QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUNILFdBQU0sR0FBTixNQUFNLENBQUs7UUF6QmhELHNCQUFpQixHQUFHLElBQUksZUFBZSxDQUFjLElBQUksQ0FBQyxDQUFDO1FBQzVELGdCQUFXLEdBQXFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQy9FLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUN4QixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDOUcsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVNLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLDBCQUFxQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2RCx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUN2RCxtQkFBYyxHQUFvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUUsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3pGLGNBQVMsR0FBdUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU96RSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUN4RSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUyxFQUFFLFdBQW9CO1FBQzdDLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVM7UUFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs4R0E1RFUsaUJBQWlCLG1GQTBCbEIseUJBQXlCO2tIQTFCeEIsaUJBQWlCLGNBRmhCLE1BQU07MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBMkJJLE1BQU07MkJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbW1vblNtaHRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24tc21odC1jb25maWcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25TbWh0U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzeXN0ZW1EYXRlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGF0ZSB8IG51bGw+KG51bGwpO1xyXG4gIHB1YmxpYyBzeXN0ZW1EYXRlJDogT2JzZXJ2YWJsZTxEYXRlPiA9IHRoaXMuc3lzdGVtRGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcclxuICAgIHN3aXRjaE1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICBpZiAoZGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGUoKS5waXBlKFxyXG4gICAgICAgICAgdGFwKGZldGNoZWREYXRlID0+IHRoaXMuc3lzdGVtRGF0ZVN1YmplY3QubmV4dCh0aGlzLm1vZGlmeURhdGVCeVVUQyhuZXcgRGF0ZShmZXRjaGVkRGF0ZS5kYXRhUmVzdWx0KSwgdHJ1ZSkpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKGRhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHByaXZhdGUgc2hvd0xvYWRpbmdTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgc2hvd0xvYWRpbmdPYnNlcnZhYmxlID0gdGhpcy5zaG93TG9hZGluZ1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgbWVzc2FnZVNvY2tldFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIG1lc3NhZ2VTb2NrZXQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLm1lc3NhZ2VTb2NrZXRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGxhbmd1YWdlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSB8fCAnZW4nKTtcclxuICBwdWJsaWMgbGFuZ3VhZ2UkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmxhbmd1YWdlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbW1vblNtaHRDb25maWdTZXJ2aWNlLFxyXG4gICAgQEluamVjdCgnQ29tbW9uU21odENvbmZpZ1NlcnZpY2UnKSBwcml2YXRlIGNvbmZpZzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2Uuc2V0Q29uZmlnKHRoaXMuY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGdldEFwaVVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoJ2FwaVVybCcpO1xyXG4gIH1cclxuICBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2VTdWJqZWN0Lm5leHQobGFuZyk7XHJcbiAgfVxyXG4gIHNob3dMb2FkaW5nKGlzTG9hZGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZ1N1YmplY3QubmV4dChpc0xvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodGhpcy5nZXRBcGlVcmwoKSArICcvYXBpL3N5cy9nZXRXb3JraW5nRGF0ZScpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3lzdGVtRGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0RGF0ZSgpLnBpcGUoXHJcbiAgICAgIHRhcChmZXRjaGVkRGF0ZSA9PiB0aGlzLnN5c3RlbURhdGVTdWJqZWN0Lm5leHQoZmV0Y2hlZERhdGUuZGF0YVJlc3VsdCkpXHJcbiAgICApLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbW9kaWZ5RGF0ZUJ5VVRDKGRhdGU6IGFueSwgaXNHZXRNZXRob2Q6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGxvY2FsVVRDID0gKG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwKTtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIGRhdGEuc2V0SG91cnMoZGF0YS5nZXRIb3VycygpICsgKCFpc0dldE1ldGhvZCA/IC1sb2NhbFVUQyA6IGxvY2FsVVRDKSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGdldE1lc3NhZ2VTb2NrZXQoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm1lc3NhZ2VTb2NrZXRTdWJqZWN0Lm5leHQoZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==