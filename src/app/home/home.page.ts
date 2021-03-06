import { async } from "@angular/core/testing";
import { Component } from "@angular/core";
import * as firebase from "firebase";
import { snapshotToArray } from "../../environments/environment";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  item = [];
  inputText: string = "";
  ref = firebase.database().ref("/");
  timeDate = "";
  temp: number;

  constructor() {
    this.ref.on("value", async resp => {
      this.item = await snapshotToArray(resp);
    });

    this.run();
  }

  addItem(item) {
    if (item != undefined && item != null) {
      let newItem = this.ref.push();
      newItem.set(item);
      this.inputText = "";
    }
  }
  async delItem(key) {
    firebase
      .database()
      .ref("item/" + key)
      .remove();
  }
  async upItem(key, time) {
    firebase
      .database()
      .ref("item/" + key)
      .set(time);
  }

  run() {
    setInterval(async () => {
      let t = new Date();
      this.timeDate =
        t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
      this.temp = await this.randomMath();
    }, 1000);
  }
  randomMath() {
    return Math.floor(Math.random() * 100);
  }
}
