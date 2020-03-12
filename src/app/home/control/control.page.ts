import { async } from "@angular/core/testing";
import { HomePage } from "./../home.page";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-control",
  templateUrl: "./control.page.html",
  styleUrls: ["./control.page.scss"]
})
export class ControlPage implements OnInit {
  home = new HomePage();
  public time1: any;
  public time2: any;
  public time3: any;
  public time4: any;
  public status: any;
  public motors = 0;
  public rpm = 0;
  public tempover = 0;
  public clock = 0;

  time = [
    [null, null],
    [null, null],
    [null, null],
    [null, null]
  ];
  i = 0;
  constructor() {}

  ngOnInit() {
    this.run();
    this.setTime();
  }

  async showTime(i, time) {
    let t = await new Date(time);
    this.time[i] = [t.getHours(), t.getMinutes()];
    console.log(this.time[i][0]);
    console.log(this.time[i][1]);
    if (i == 0) {
      this.home.upItem("h1", t.getHours());
      this.home.upItem("m1", t.getMinutes());
    } else if (i == 1) {
      this.home.upItem("h2", t.getHours());
      this.home.upItem("m2", t.getMinutes());
    } else if (i == 2) {
      this.home.upItem("h3", t.getHours());
      this.home.upItem("m3", t.getMinutes());
    } else if (i == 3) {
      this.home.upItem("h4", t.getHours());
      this.home.upItem("m4", t.getMinutes());
    }
  }

  run() {
    setInterval(async () => {
      let t = new Date();
      this.setTime();
      //console.log(this.i);
      if (
        t.getHours() == this.time[this.i][0] &&
        t.getMinutes() == this.time[this.i][1]
      ) {
        alert(this.time[this.i][0] + ":" + this.time[this.i][1]);

        this.time[this.i] = [null, null];
        if (this.i == 0) {
          this.status = 1;
          this.home.upItem("status", 1);
          this.home.upItem("h1", "null");
          this.home.upItem("m1", "null");
          this.clock = 1;
        } else if (this.i == 1) {
          this.status = 1;
          this.home.upItem("status", 1);
          this.home.upItem("h2", "null");
          this.home.upItem("m2", "null");
        } else if (this.i == 2) {
          this.status = 1;
          this.home.upItem("status", 1);
          this.home.upItem("h3", "null");
          this.home.upItem("m3", "null");
        } else if (this.i == 3) {
          this.status = 1;
          this.home.upItem("status", 1);
          this.home.upItem("h4", "null");
          this.home.upItem("m4", "null");
          this.time1 = null;
          this.time2 = null;
          this.time3 = null;
          this.time4 = null;
        }
        this.i++;
        if (this.i == 4) {
          this.i = 0;
          this.clock = 0;
        }
      }

      if (this.home.item[0] != null) {
        if (this.tempover > 0) {
          if (this.home.item[0].temp > this.tempover && this.clock == 0) {
            this.status = 1;
            this.home.upItem("status", 1);
          } else if (
            this.home.item[0].temp <= this.tempover &&
            this.clock == 0
          ) {
            this.status = 0;
            this.home.upItem("status", 0);
          }
        }
      }
    }, 1000);
  }

  setTime = async () => {
    if (this.home.item[0] != null) {
      this.time[0][0] = this.home.item[0].h1;

      this.time[0][1] = this.home.item[0].m1;

      this.time[1][0] = this.home.item[0].h2;
      this.time[1][1] = this.home.item[0].m2;

      this.time[2][0] = this.home.item[0].h3;
      this.time[2][1] = this.home.item[0].m3;

      this.time[3][0] = this.home.item[0].h4;
      this.time[3][1] = this.home.item[0].m4;

      this.status = this.home.item[0].status;
      this.motors = this.home.item[0].motors;
      this.tempover = this.home.item[0].tempover;
    }
  };

  control() {
    if (this.status == 0) {
      this.status = 1;
      this.home.upItem("status", 1);
    } else {
      this.status = 0;
      this.home.upItem("status", 0);
    }
  }
  setRpm() {
    if (this.home.item[0] != null) {
      this.home.upItem("motors", this.rpm);
    }
  }
  setTemp() {
    if (this.home.item[0] != null) {
      this.home.upItem("tempover", this.tempover);
    }
  }
}
