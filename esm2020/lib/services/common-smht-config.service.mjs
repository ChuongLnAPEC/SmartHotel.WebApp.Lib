import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CommonSmhtConfigService {
    constructor() {
        this.config = {};
    }
    setConfig(config) {
        this.config = config;
    }
    getConfig(key) {
        if (!this.config[key]) {
            throw new Error(`Configuration key "${key}" is not set.`);
        }
        return this.config[key];
    }
}
CommonSmhtConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonSmhtConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonSmhtConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNtaHQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zbWh0LWxpYi9zcmMvbGliL3NlcnZpY2VzL2NvbW1vbi1zbWh0LWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyx1QkFBdUI7SUFIcEM7UUFJVSxXQUFNLEdBQVEsRUFBRSxDQUFDO0tBWTFCO0lBVkMsU0FBUyxDQUFDLE1BQVc7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsZUFBZSxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7b0hBWlUsdUJBQXVCO3dIQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTsyRkFFUCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblNtaHRDb25maWdTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvbmZpZzogYW55ID0ge307XHJcblxyXG4gIHNldENvbmZpZyhjb25maWc6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWcoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZ1trZXldKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29uZmlndXJhdGlvbiBrZXkgXCIke2tleX1cIiBpcyBub3Qgc2V0LmApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2tleV07XHJcbiAgfVxyXG59XHJcbiJdfQ==