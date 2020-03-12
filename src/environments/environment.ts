// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBJLQmF4fnkhva-FV5YDRt4xcEw0KoqF0Y",
    authDomain: "demodata-96d53.firebaseapp.com",
    databaseURL: "https://demodata-96d53.firebaseio.com",
    projectId: "demodata-96d53",
    storageBucket: "demodata-96d53.appspot.com",
    messagingSenderId: "577598289552",
    appId: "1:577598289552:web:aeff64410274b09ad5ca15",
    measurementId: "G-ST5R5BWJHC"
  }
};

export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();

    returnArray.push(item);
  });
  return returnArray;
};
