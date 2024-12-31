import { NgModule } from '@angular/core';
import { CommonSmhtService } from './services/common-smht.service';
import * as i0 from "@angular/core";
export class SmhtLibModule {
    static forRoot(environment) {
        return {
            ngModule: SmhtLibModule,
            providers: [
                {
                    provide: 'env',
                    useValue: environment,
                },
                CommonSmhtService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21odC1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc21odC1saWIvc3JjL2xpYi9zbWh0LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBY25FLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsS0FBSztvQkFDZCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Z0JBQ0QsaUJBQWlCO2FBQ2xCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzBHQVpVLGFBQWE7MkdBQWIsYUFBYTsyR0FBYixhQUFhOzJGQUFiLGFBQWE7a0JBVnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBRWI7b0JBQ0QsT0FBTyxFQUFFLEVBRVI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25TbWh0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uLXNtaHQuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21odExpYk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U21odExpYk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNtaHRMaWJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6ICdlbnYnLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGVudmlyb25tZW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ29tbW9uU21odFNlcnZpY2VcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==