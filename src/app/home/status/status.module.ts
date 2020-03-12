import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StatusPageRoutingModule } from "./status-routing.module";

import { StatusPage } from "./status.page";

import { RoundProgressModule } from "angular-svg-round-progressbar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPageRoutingModule,
    RoundProgressModule
  ],
  declarations: [StatusPage]
})
export class StatusPageModule {}
