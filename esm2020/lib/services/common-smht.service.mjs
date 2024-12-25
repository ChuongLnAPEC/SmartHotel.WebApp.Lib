import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommonSmhtService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNtaHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NtaHQtbGliL3NyYy9saWIvc2VydmljZXMvY29tbW9uLXNtaHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQW9CLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEQsTUFBTSxPQUFPLGlCQUFpQjtJQXdCNUIsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEJ4QixRQUFHLEdBQUcsd0NBQXdDLENBQUE7UUFDOUMsc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQWMsSUFBSSxDQUFDLENBQUM7UUFDNUQsZ0JBQVcsR0FBcUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDL0UsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ3hCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM5RyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRU0sdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDakUsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXZELHlCQUFvQixHQUFHLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZELG1CQUFjLEdBQW9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUxRSxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDekYsY0FBUyxHQUF1QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSzNFLENBQUM7SUFDRCxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcseUJBQXlCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDakIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDeEUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBRSxXQUFvQjtRQUM3QyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OEdBdERVLGlCQUFpQjtrSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblNtaHRTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaSA9ICdodHRwczovL2xvdHVzLXVhdC5mb3VyaWVyLmdyb3VwL2ZvLWFwaSdcclxuICBwcml2YXRlIHN5c3RlbURhdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlIHwgbnVsbD4obnVsbCk7XHJcbiAgcHVibGljIHN5c3RlbURhdGUkOiBPYnNlcnZhYmxlPERhdGU+ID0gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgc3dpdGNoTWFwKChkYXRlKSA9PiB7XHJcbiAgICAgIGlmIChkYXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZSgpLnBpcGUoXHJcbiAgICAgICAgICB0YXAoZmV0Y2hlZERhdGUgPT4gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5uZXh0KHRoaXMubW9kaWZ5RGF0ZUJ5VVRDKG5ldyBEYXRlKGZldGNoZWREYXRlLmRhdGFSZXN1bHQpLCB0cnVlKSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gb2YoZGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgcHJpdmF0ZSBzaG93TG9hZGluZ1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBzaG93TG9hZGluZ09ic2VydmFibGUgPSB0aGlzLnNob3dMb2FkaW5nU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBtZXNzYWdlU29ja2V0U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgbWVzc2FnZVNvY2tldCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMubWVzc2FnZVNvY2tldFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgbGFuZ3VhZ2VTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpIHx8ICdlbicpO1xyXG4gIHB1YmxpYyBsYW5ndWFnZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMubGFuZ3VhZ2VTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudFxyXG4gICkge1xyXG4gIH1cclxuICBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2VTdWJqZWN0Lm5leHQobGFuZyk7XHJcbiAgfVxyXG4gIHNob3dMb2FkaW5nKGlzTG9hZGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZ1N1YmplY3QubmV4dChpc0xvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodGhpcy5hcGkgKyAnL2FwaS9zeXMvZ2V0V29ya2luZ0RhdGUnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN5c3RlbURhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldERhdGUoKS5waXBlKFxyXG4gICAgICB0YXAoZmV0Y2hlZERhdGUgPT4gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5uZXh0KGZldGNoZWREYXRlLmRhdGFSZXN1bHQpKVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG1vZGlmeURhdGVCeVVUQyhkYXRlOiBhbnksIGlzR2V0TWV0aG9kOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBsb2NhbFVUQyA9IChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCk7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICBkYXRhLnNldEhvdXJzKGRhdGEuZ2V0SG91cnMoKSArICghaXNHZXRNZXRob2QgPyAtbG9jYWxVVEMgOiBsb2NhbFVUQykpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlU29ja2V0KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlU29ja2V0U3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=