import {NgModule} from "@angular/core";
import {ColorDirective} from "./directives/color.directive";
import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ColorDirective,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorDirective,
    CapitalizePipe,
    CommonModule
  ]
})
export class SharedModule {

}
