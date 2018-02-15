import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpService } from './_services/http.service';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationService } from './_services/configuration.service';

// Imports core components
import { LoaderComponent } from './_components/loader/loader.component';
import { LoaderService } from './_components/loader/loader.service';

export function configurationServiceFactory(configurationService: ConfigurationService): Function {
    return () => configurationService.init(); // => required, otherwise `this` won't work inside ConfigurationService::init
}
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
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
        },
        LoaderService
    ]
})
export class CoreModule { }
