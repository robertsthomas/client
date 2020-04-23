import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { AuthGuard } from "../guards/auth/auth.guard";
import { AddComponent } from "../tools/components/add/add.component";
import { AddToolPage } from "../pages/add-tool/add-tool.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
          },
          {
            path: "home",
            loadChildren: () =>
              import("../pages/home/home.module").then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: "add",
        children: [
          {
            path: "",
            redirectTo: "/tabs/add/first",
            pathMatch: "full",
            loadChildren: () =>
              import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
          },
          {
            path: "first",
            component: AddComponent,
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            canActivate: [AuthGuard],
            loadChildren: () =>
              import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
