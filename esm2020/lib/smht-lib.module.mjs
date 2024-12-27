import { NgModule } from '@angular/core';
import { CommonSmhtConfigService } from './services/common-smht-config.service';
import * as i0 from "@angular/core";
export class SmhtLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21odC1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc21odC1saWIvc3JjL2xpYi9zbWh0LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBWWhGLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBVztRQUN4QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRCx1QkFBdUI7YUFDeEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MEdBWlUsYUFBYTsyR0FBYixhQUFhOzJHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFSekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFDYjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25TbWh0Q29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uLXNtaHQtY29uZmlnLnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNtaHRMaWJNb2R1bGUgeyBcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNtaHRMaWJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNtaHRMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdDb21tb25TbWh0Q29uZmlnJyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICBDb21tb25TbWh0Q29uZmlnU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19