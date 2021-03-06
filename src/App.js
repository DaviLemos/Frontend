import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/nintube/login/Login"));
const Register = React.lazy(() => import("./views/nintube/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Email = React.lazy(() =>
  import("./views/nintube/emailConfirm/emailConfirm")
);
const SendEmail = React.lazy(() =>
  import("./views/nintube/emailConfirm/sendEmail")
);
const ForgotPass = React.lazy(() =>
  import("./views/nintube/forgotPass/forgotPass")
);

const App = ({}) => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <Route
            exact
            path="/confirmation/:id"
            name="Confirm"
            render={(props) => <Email {...props} />}
          />
          <Route
            exact
            path="/forgot_password/:id"
            name="forgot"
            render={(props) => <ForgotPass {...props} />}
          />
          <Route
            exact
            path="/send_email"
            name="sendEmail"
            render={(props) => <SendEmail {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
