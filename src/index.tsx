import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { createStore } from './configs/redux/store';
import { createHashHistory } from 'history';
import routes from './configs/constants/routes';
import DashboardScreen from './components/top-level-components/Dashboard';
import { initialize } from './creators/initialize';

const history = createHashHistory(),
  store = createStore(history);

store.dispatch(initialize('REDUX_TEST'));

// <!-- update the version number as needed -->
// <script defer src="/__/firebase/8.2.5/firebase-app.js"></script>
// <!-- include only the Firebase features as you need -->
// <script defer src="/__/firebase/8.2.5/firebase-auth.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-database.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-firestore.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-functions.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-messaging.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-storage.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-analytics.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-remote-config.js"></script>
// <script defer src="/__/firebase/8.2.5/firebase-performance.js"></script>
//
// <!--
//       initialize the SDK after all desired features are loaded, set useEmulator to false
//       to avoid connecting the SDK to running emulators.
//     -->
// <script defer src="/__/firebase/init.js?useEmulator=true"></script>

// // <script>
// //   document.addEventListener('DOMContentLoaded', function() {
// //   const loadEl = document.querySelector('#load');
// {/*  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}
// {/*  // // The Firebase SDK is initialized and available here!*/}
// {/*  //*/}
// {/*  // firebase.auth().onAuthStateChanged(user => { });*/}
// {/*  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });*/}
// //   // firebase.firestore().doc('/foo/bar').get().then(() => { });
// //   // firebase.functions().httpsCallable('yourFunction')().then(() => { });
// //   // firebase.messaging().requestPermission().then(() => { });
// //   // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
// //   // firebase.analytics(); // call to activate
// //   // firebase.analytics().logEvent('tutorial_completed');
// {/*  // firebase.performance(); // call to activate*/}
// {/*  //*/}
// {/*  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}
//
// {/*  try {*/}
// //   let app = firebase.app();
// {/*  let features = [*/}
// //   'auth',
// //   'database',
// {/*  'firestore',*/}
// {/*  'functions',*/}
// {/*  'messaging',*/}
// {/*  'storage',*/}
// {/*  'analytics',*/}
// //   'remoteConfig',
// //   'performance',
// //   ].filter(feature => typeof app[feature] === 'function');
// //   loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
// // } catch (e) {
// //   console.error(e);
// //   loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
// {/*}*/}
// {/*});*/}
// {/*</script>*/}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <div className={'route'}>
            <Route component={DashboardScreen} exact path={routes.DASHBOARD} />
          </div>
        </App>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
