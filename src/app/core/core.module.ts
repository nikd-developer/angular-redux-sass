import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpService } from './_services/http.service';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationService } from './_services/configuration.service';

export function configurationServiceFactory(configurationService: ConfigurationService): Function {
    return () => configurationService.init(); // => required, otherwise `this` won't work inside ConfigurationService::init
}
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        ConfigurationService,
        {
            provide: APP_INITIALIZER,
            useFactory: configurationServiceFactory,
            deps: [ConfigurationService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpService,
            multi: true
        }
    ]
})
export class CoreModule { }
