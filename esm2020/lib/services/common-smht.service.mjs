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
        return this.httpClient.get(this.getApiUrl() + '/api/sys/getWorkingDate');
    }
    updateSystemDate() {
        this.getDate().pipe(tap(fetchedDate => this.systemDateSubject.next(this.modifyDateByUTC(new Date(fetchedDate.dataResult), true)))).subscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNtaHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NtaHQtbGliL3NyYy9saWIvc2VydmljZXMvY29tbW9uLXNtaHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFvQixFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS2hELE1BQU0sT0FBTyxpQkFBaUI7SUF1QjVCLFlBQ1UsVUFBc0IsRUFDUCxHQUFRO1FBRHZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDUCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBeEJ6QixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBYyxJQUFJLENBQUMsQ0FBQztRQUM1RCxnQkFBVyxHQUFxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUMvRSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzlHLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFTSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNqRSwwQkFBcUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDdkQsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFFLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQVMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN6RixjQUFTLEdBQXVCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFNM0UsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUE7SUFDcEMsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxXQUFXLENBQUMsU0FBa0I7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLHlCQUF5QixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ2pCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM5RyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUyxFQUFFLFdBQW9CO1FBQzdDLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVM7UUFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs4R0ExRFUsaUJBQWlCLDRDQXlCbEIsS0FBSztrSEF6QkosaUJBQWlCLGNBRmhCLE1BQU07MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBMEJJLE1BQU07MkJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uU21odFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3lzdGVtRGF0ZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGUgfCBudWxsPihudWxsKTtcclxuICBwdWJsaWMgc3lzdGVtRGF0ZSQ6IE9ic2VydmFibGU8RGF0ZT4gPSB0aGlzLnN5c3RlbURhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICBzd2l0Y2hNYXAoKGRhdGUpID0+IHtcclxuICAgICAgaWYgKGRhdGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKCkucGlwZShcclxuICAgICAgICAgIHRhcChmZXRjaGVkRGF0ZSA9PiB0aGlzLnN5c3RlbURhdGVTdWJqZWN0Lm5leHQodGhpcy5tb2RpZnlEYXRlQnlVVEMobmV3IERhdGUoZmV0Y2hlZERhdGUuZGF0YVJlc3VsdCksIHRydWUpKSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBvZihkYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBwcml2YXRlIHNob3dMb2FkaW5nU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHNob3dMb2FkaW5nT2JzZXJ2YWJsZSA9IHRoaXMuc2hvd0xvYWRpbmdTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIG1lc3NhZ2VTb2NrZXRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBtZXNzYWdlU29ja2V0JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5tZXNzYWdlU29ja2V0U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBsYW5ndWFnZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykgfHwgJ2VuJyk7XHJcbiAgcHVibGljIGxhbmd1YWdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5sYW5ndWFnZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IGFueVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgZ2V0QXBpVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5lbnY/LmFwaXMuZGVmYXVsdD8udXJsXHJcbiAgfVxyXG4gIHNldExhbmd1YWdlKGxhbmc6IHN0cmluZykge1xyXG4gICAgdGhpcy5sYW5ndWFnZVN1YmplY3QubmV4dChsYW5nKTtcclxuICB9XHJcbiAgc2hvd0xvYWRpbmcoaXNMb2FkaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nU3ViamVjdC5uZXh0KGlzTG9hZGluZyk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCh0aGlzLmdldEFwaVVybCgpICsgJy9hcGkvc3lzL2dldFdvcmtpbmdEYXRlJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTeXN0ZW1EYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXREYXRlKCkucGlwZShcclxuICAgICAgdGFwKGZldGNoZWREYXRlID0+IHRoaXMuc3lzdGVtRGF0ZVN1YmplY3QubmV4dCh0aGlzLm1vZGlmeURhdGVCeVVUQyhuZXcgRGF0ZShmZXRjaGVkRGF0ZS5kYXRhUmVzdWx0KSwgdHJ1ZSkpKVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG1vZGlmeURhdGVCeVVUQyhkYXRlOiBhbnksIGlzR2V0TWV0aG9kOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBsb2NhbFVUQyA9IChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCk7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICBkYXRhLnNldEhvdXJzKGRhdGEuZ2V0SG91cnMoKSArICghaXNHZXRNZXRob2QgPyAtbG9jYWxVVEMgOiBsb2NhbFVUQykpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlU29ja2V0KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlU29ja2V0U3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=