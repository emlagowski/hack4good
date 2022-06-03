import React, { useState } from "react";
import Button from '@mui/material/Button';
import MicrosoftLogin from "react-microsoft-login";

import { config } from "./config";

export const Login: React.FC = () => {
    const [msalInstance, setMsalInstance] = useState();

    const loginHandler = (err: any, data: any, msal: any) => {
        console.log(err, data);
        if (!err && data) {
            setMsalInstance(msal);
        }
      };
    
      const logoutHandler = () => {
        // msalInstance.logout();
      };
      
    return (
        <>
        {!msalInstance ? (
            <Button variant="contained" onClick={logoutHandler}>Logout</Button>
          ) : (
            <MicrosoftLogin
              clientId={config.client_id}
              authCallback={loginHandler}
              graphScopes={["user.read"]}
              children={<Button>Custom button</Button>}
              useLocalStorageCache={true}
            />
          )}
          <Button variant="contained" onClick={logoutHandler}>Demo</Button>
        </>
    )
};
