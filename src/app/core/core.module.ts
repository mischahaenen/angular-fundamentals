import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
    imports: [CommonModule, HttpClientModule],
    exports: [FooterComponent, HeaderComponent],
    declarations: [FooterComponent, HeaderComponent],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only')
        }
    }
}
