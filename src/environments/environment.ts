// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //url: 'https://eschool.bizmanage.in/api/index.php/',
  // uploadUrl: 'https://eschool.bizmanage.in/api/uploads/',

    url: 'http://localhost/institute-api/api/index.php/',
    uploadUrl: 'http://localhost/institute-api/api/uploads/',


  firebaseConfig : {
    apiKey: "AIzaSyCsVKeqSr3L9kD_060pi1la0_FkMrSkUNg",
    authDomain: "institute-7d52f.firebaseapp.com",
    projectId: "institute-7d52f",
    storageBucket: "institute-7d52f.appspot.com",
    messagingSenderId: "207274741586",
    appId: "1:207274741586:web:71d779147ae5caaa9bf48b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
