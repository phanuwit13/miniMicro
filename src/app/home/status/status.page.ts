import { HomePage } from "./../home.page";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-status",
  templateUrl: "./status.page.html",
  styleUrls: ["./status.page.scss"]
})
export class StatusPage implements OnInit {
  home = new HomePage();
  status = "";
  constructor() {}

  ngOnInit() {
    this.run();
  }

  run = () => {
    setInterval(() => {
      if (this.home.item[0] != null) {
        if (this.home.item[0].status == 0) {
          this.status = "OFF";
        } else {
          this.status = "ON";
        }
      }
    }, 1000);
  };
}
