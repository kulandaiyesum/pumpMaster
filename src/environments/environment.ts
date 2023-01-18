// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
  apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',

  loginApi: 'https://dev-shinelogic.gateway.apiplatform.io/v1/pumpMaster', // login

  apikpstUrl:
    'https://dev-shinelogic.gateway.apiplatform.io/v1/materialUseType', // material-uasage-type

  apiMaterialGradeUrl:
    'https://dev-shinelogic.gateway.apiplatform.io/v1/materialGrade', // grade master

  loginBaseUrl: 'https://dev-shinelogic.gateway.apiplatform.io/v1/getUesrLogin', // login check

  apiPumpMaster: 'https://dev-shinelogic.gateway.apiplatform.io/v1/pumpDetails', // pump master

  apiPumpPart: 'https://dev-shinelogic.gateway.apiplatform.io/v1/pumpPart', // pump part
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
