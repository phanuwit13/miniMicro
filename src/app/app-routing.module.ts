import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "status",
    loadChildren: () =>
      import("./home/status/status.module").then(m => m.StatusPageModule)
  },
  {
    path: "control",
    loadChildren: () =>
      import("./home/control/control.module").then(m => m.ControlPageModule)
  },
  {
    path: "member",
    loadChildren: () =>
      import("./home/member/member.module").then(m => m.MemberPageModule)
  },
  {
    path: "about",
    loadChildren: () =>
      import("./home/about/about.module").then(m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
