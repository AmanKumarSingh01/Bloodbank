import React, { Component } from "react";
import withFirebaseAuth from "react-auth-firebase";
import firebase from "./../components/firebase/firebase";
import Home from "./../files/home";
import ParticlesContainer from './../components/Particlecontainer'
import { Card ,Nav,Navbar } from "react-bootstrap";


// const email = "test@test.com";
// const password = "password";

class App extends Component {
  state = {
    email: `test@test.com`,
    password: `password`
  };
  render() {
    // console.log(this.props);

    const {
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      signInWithFacebook,
      signInWithGithub,
      signInWithTwitter,
      googleAccessToken,
      facebookAccessToken,
      githubAccessToken,
      twitterAccessToken,
      twitterSecret,
      user,
      error,
      signOut
    } = this.props;
    const { email, password } = this.state;
    if (user) {
      console.log(user)
      localStorage.setItem('Name',user.displayName)
      localStorage.setItem('Email',user.email)
      localStorage.setItem('url',user.photoURL)
      localStorage.setItem('uid' , user.providerData[0].uid)
      this.props.history.push('/feed');

    }
    return (
      <div className = 'container'>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">Blood--Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link ><button onClick={signInWithGoogle}>
                <img width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"></img>Signin with Google
                  </button></Nav.Link>
                <Nav.Link >
                <button onClick={signInWithFacebook}>Signin with Facebook</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            this is a project made my Aman kumar singh<br></br><br></br>

            Login with your google account to see all the features!!
          </div>
          {/* 
        <button onClick={signInWithGoogle}>Signin with Google</button> <br />
        <button onClick={signInWithFacebook}>Signin with Facebook</button>{" "}
        <br />
        <button onClick={signInWithGithub}>Signin with Github</button> <br />
        <button onClick={signInWithTwitter}>Signin with Twitter</button> <br />
         */}
      </div>
    );
  }
}

const authConfig = {
  email: {
    verifyOnSignup: false,
    saveUserInDatabase: true
  },
  google: {
    // scopes: ["admin.datatransfer", "contacts.readonly"], // optional
    // customParams: {
    //   login_hint: "user@example.com"
    // },
    // redirect: true, // default is popup: true, redirect: true,
    returnAccessToken: true,
    // scopes: [], // array
    saveUserInDatabase: true
  },
  facebook: {
    // scopes: ["admin.datatransfer", "contacts.readonly"], // optional
    // customParams: {
    //   login_hint: "user@example.com"
    // },
    redirect: true, // default is popup: true, redirect: true,
    returnAccessToken: true,
    saveUserInDatabase: true
  },
  github: {
    // redirect: true,
    returnAccessToken: true,
    saveUserInDatabase: true
  },

  twitter: {
    // redirect: true,
    returnAccessToken: true,
    returnSecret: true,
    saveUserInDatabase: true
  }
};

// export default App;
export default withFirebaseAuth(App, firebase, authConfig);
