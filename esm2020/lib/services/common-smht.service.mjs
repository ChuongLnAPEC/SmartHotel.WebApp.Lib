import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommonSmhtService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.api = 'https://api-gateway-test.apecgroup.net/shmv2/fo';
        this.systemDateSubject = new BehaviorSubject(null);
        this.systemDate$ = this.systemDateSubject.asObservable().pipe(switchMap((date) => {
            if (date === null) {
                return this.getDate().pipe(tap(fetchedDate => this.systemDateSubject.next(fetchedDate.dataResult)));
            }
            else {
                return of(date);
            }
        }));
        this.showLoadingSubject = new BehaviorSubject(false);
        this.showLoadingObservable = this.showLoadingSubject.asObservable();
        this.getDate();
    }
    showLoading(isLoading) {
        this.showLoadingSubject.next(isLoading);
    }
    getDate() {
        // return of(new Date());
        return this.httpClient.get(this.api + '/api/sys/getWorkingDate');
        // return this.sysServiceProxy.getWorkingDate()
    }
    updateSystemDate() {
        this.getDate().pipe(tap(fetchedDate => this.systemDateSubject.next(fetchedDate.dataResult))).subscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNtaHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NtaHQtbGliL3NyYy9saWIvc2VydmljZXMvY29tbW9uLXNtaHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQW9CLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEQsTUFBTSxPQUFPLGlCQUFpQjtJQXNCNUIsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdEJ4QixRQUFHLEdBQUcsaURBQWlELENBQUE7UUFDdkQsc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQWMsSUFBSSxDQUFDLENBQUM7UUFDNUQsZ0JBQVcsR0FBcUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDL0UsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ3hCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3hFLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFTSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNqRSwwQkFBcUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFTN0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFSRCxXQUFXLENBQUMsU0FBa0I7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBT0QsT0FBTztRQUNMLHlCQUF5QjtRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcseUJBQXlCLENBQUMsQ0FBQztRQUNqRSwrQ0FBK0M7SUFDakQsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ2pCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3hFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OEdBckNVLGlCQUFpQjtrSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblNtaHRTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaSA9ICdodHRwczovL2FwaS1nYXRld2F5LXRlc3QuYXBlY2dyb3VwLm5ldC9zaG12Mi9mbydcclxuICBwcml2YXRlIHN5c3RlbURhdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlIHwgbnVsbD4obnVsbCk7XHJcbiAgcHVibGljIHN5c3RlbURhdGUkOiBPYnNlcnZhYmxlPERhdGU+ID0gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgc3dpdGNoTWFwKChkYXRlKSA9PiB7XHJcbiAgICAgIGlmIChkYXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZSgpLnBpcGUoXHJcbiAgICAgICAgICB0YXAoZmV0Y2hlZERhdGUgPT4gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5uZXh0KGZldGNoZWREYXRlLmRhdGFSZXN1bHQpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKGRhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHByaXZhdGUgc2hvd0xvYWRpbmdTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgc2hvd0xvYWRpbmdPYnNlcnZhYmxlID0gdGhpcy5zaG93TG9hZGluZ1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHNob3dMb2FkaW5nKGlzTG9hZGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZ1N1YmplY3QubmV4dChpc0xvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcclxuICApIHtcclxuICAgIHRoaXMuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuICBnZXREYXRlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyByZXR1cm4gb2YobmV3IERhdGUoKSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCh0aGlzLmFwaSArICcvYXBpL3N5cy9nZXRXb3JraW5nRGF0ZScpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuc3lzU2VydmljZVByb3h5LmdldFdvcmtpbmdEYXRlKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN5c3RlbURhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldERhdGUoKS5waXBlKFxyXG4gICAgICB0YXAoZmV0Y2hlZERhdGUgPT4gdGhpcy5zeXN0ZW1EYXRlU3ViamVjdC5uZXh0KGZldGNoZWREYXRlLmRhdGFSZXN1bHQpKVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19