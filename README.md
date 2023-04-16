# vue-firebase-auth-ui

Welcome to the next phase of our Vue.js basics journey, focusing on upgrading UX for user authentication. 
This repository aims to enhance UX while seamlessly integrating Firebase auth UI for secure and reliable authentication.

The project includes the following pages:
- Top page
- Login page: This page serves two functions - signing in and signing up.
- User-specific dashboard


## Getting started
See the instruction [here](./vue-firebase-auth-ui/README.md)

## References
- firebase UI: https://qiita.com/okdyy75/items/24e78fdd0f12742b9e82
- firebase UI's minimum boilerplate: https://github.com/Zenkylo/vue-firebaseui-authentication

## Project memo

### Setup
This project is prepared by the following command:
```bash
npm init vue@latest
cd vue-firebase-auth-ui/
npm install
npm install firebaseui
```

### `firebase/auth` issue
In certain websites, `GoogleAuthProvider.PROVIDER_ID` is referenced as `firebase.auth.GoogleAuthProvider.PROVIDER_ID`. 
However, it is not defined under `firebase`, which leads to an undefined error. 
In my environment, `GoogleAuthProvider.PROVIDER_ID` is defined under `firebase/auth`. Therefore, the import directive should be written as follows:
```js
import * as firebase_auth from "firebase/auth";
```
After this directive, `GoogleAuthProvider.PROVIDER_ID` can be accessed using `firebase_auth.GoogleAuthProvider.PROVIDER_ID`. For more details, refer to [this code](https://github.com/eryeden/vue-firebase-auth-ui/blob/5921e2252698ea08ad8a1c95584fa9da3d44ed31/vue-firebase-auth-ui/src/components/FirebaseAuthUI.vue#L26).
