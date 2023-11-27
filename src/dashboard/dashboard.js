import React from "react";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Profile from './profile'
 

 
 
function App() {
  return (
        <div>
      <SignedIn>
        <Welcome />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
 
function Welcome() {
  return <div>Hello you are signed in

    <UserButton afterSignOutUrl="/"/>
    <Profile />
  </div>;
}
 
export default App;