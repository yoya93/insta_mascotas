import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

export const User = () => {
  return (
    <div>
      <h1>USER</h1>
      <AmplifySignOut />
    </div>
  );
};
