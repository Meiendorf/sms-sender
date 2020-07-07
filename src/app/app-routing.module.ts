import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {MessagesModule} from "./messages/messages.module";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'messages', loadChildren: () => MessagesModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
