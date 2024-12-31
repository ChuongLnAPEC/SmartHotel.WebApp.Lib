import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommonSmhtService {
    constructor(httpClient, env) {
        this.httpClient = httpClient;
        this.env = env;
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
    getApiUrl() {
        return this.env?.apis.default?.url;
    }
    setLanguage(lang) {
        this.languageSubject.next(lang);
    }
    showLoading(isLoading) {
        this.showLoadingSubject.next(isLoading);
    }
    getDate() {
        console.log(this.getApiUrl());
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
CommonSmhtService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, deps: [{ token: i1.HttpClient }, { token: 'env' }], target: i0.ɵɵFactoryTarget.Injectable });
CommonSmhtService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['env']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNtaHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NtaHQtbGliL3NyYy9saWIvc2VydmljZXMvY29tbW9uLXNtaHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFvQixFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS2hELE1BQU0sT0FBTyxpQkFBaUI7SUF1QjVCLFlBQ1UsVUFBc0IsRUFDUCxHQUFRO1FBRHZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDUCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBeEJ6QixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBYyxJQUFJLENBQUMsQ0FBQztRQUM1RCxnQkFBVyxHQUFxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUMvRSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzlHLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFTSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNqRSwwQkFBcUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDdkQsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFFLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQVMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN6RixjQUFTLEdBQXVCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFNM0UsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUE7SUFDcEMsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxXQUFXLENBQUMsU0FBa0I7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcseUJBQXlCLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDakIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDeEUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBRSxXQUFvQjtRQUM3QyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OEdBNURVLGlCQUFpQiw0Q0F5QmxCLEtBQUs7a0hBekJKLGlCQUFpQixjQUZoQixNQUFNOzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQTBCSSxNQUFNOzJCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblNtaHRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHN5c3RlbURhdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlIHwgbnVsbD4obnVsbCk7XHJcbiAgcHVibGljIHN5c3RlbURhdGUkOiBPYnNlcnZhYmxlPERhdGU+ID0gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgc3dpdGNoTWFwKChkYXRlKSA9PiB7XHJcbiAgICAgIGlmIChkYXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZSgpLnBpcGUoXHJcbiAgICAgICAgICB0YXAoZmV0Y2hlZERhdGUgPT4gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5uZXh0KHRoaXMubW9kaWZ5RGF0ZUJ5VVRDKG5ldyBEYXRlKGZldGNoZWREYXRlLmRhdGFSZXN1bHQpLCB0cnVlKSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gb2YoZGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgcHJpdmF0ZSBzaG93TG9hZGluZ1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBzaG93TG9hZGluZ09ic2VydmFibGUgPSB0aGlzLnNob3dMb2FkaW5nU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBtZXNzYWdlU29ja2V0U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgbWVzc2FnZVNvY2tldCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMubWVzc2FnZVNvY2tldFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgbGFuZ3VhZ2VTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpIHx8ICdlbicpO1xyXG4gIHB1YmxpYyBsYW5ndWFnZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMubGFuZ3VhZ2VTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBhbnlcclxuICApIHtcclxuICB9XHJcblxyXG4gIGdldEFwaVVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZW52Py5hcGlzLmRlZmF1bHQ/LnVybFxyXG4gIH1cclxuICBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2VTdWJqZWN0Lm5leHQobGFuZyk7XHJcbiAgfVxyXG4gIHNob3dMb2FkaW5nKGlzTG9hZGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZ1N1YmplY3QubmV4dChpc0xvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5nZXRBcGlVcmwoKSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHRoaXMuZ2V0QXBpVXJsKCkgKyAnL2FwaS9zeXMvZ2V0V29ya2luZ0RhdGUnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN5c3RlbURhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldERhdGUoKS5waXBlKFxyXG4gICAgICB0YXAoZmV0Y2hlZERhdGUgPT4gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5uZXh0KGZldGNoZWREYXRlLmRhdGFSZXN1bHQpKVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG1vZGlmeURhdGVCeVVUQyhkYXRlOiBhbnksIGlzR2V0TWV0aG9kOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBsb2NhbFVUQyA9IChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCk7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICBkYXRhLnNldEhvdXJzKGRhdGEuZ2V0SG91cnMoKSArICghaXNHZXRNZXRob2QgPyAtbG9jYWxVVEMgOiBsb2NhbFVUQykpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlU29ja2V0KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlU29ja2V0U3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=