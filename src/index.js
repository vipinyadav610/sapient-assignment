import React, { Suspense } from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "mobx-react";
import { toJS } from "mobx";
import history from "./history";
import Stores from "./Store";
import Routes from "./routes";

render(
  <Provider {...new Stores()}>
    <Suspense fallback={<div>loading......</div>}>
      <Router history={history}>
        <Routes />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("app")
);
if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === "development") {
  window.console = (function(oldCons) {
    return {
      ...oldCons,
      log: function(...args) {
        const newArgs = args.map(param => {
          return toJS(param);
        });
        oldCons.log(...newArgs);
      },
      table: function(...args) {
        const newArgs = args.map(param => {
          return toJS(param);
        });
        oldCons.table(...newArgs);
      }
    };
  })(window.console);
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         // console.log('SW registered: ', registration)
//       })
//       .catch(registrationError => {
//         // console.log('SW registration failed: ', registrationError)
//       })
//   })
// }
