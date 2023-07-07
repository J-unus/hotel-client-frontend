import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {UiModule} from "@egov/cvi-ng";

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
    ],
    imports: [
        UiModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
    ]
})
export class SharedModule {
}
