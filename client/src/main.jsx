import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

// domain
// dev-u807c7oigyo5yvp7.us.auth0.com

// client id
// lVidp4H3WXZveucUJ70QTO4nYMs3It4D
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Auth0Provider
      domain="dev-u807c7oigyo5yvp7.us.auth0.com" //{process.env.REACT_APP_DOMAIN}
      clientId="lVidp4H3WXZveucUJ70QTO4nYMs3It4D" //{process.env.REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/posts`,
      }}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </>
);
