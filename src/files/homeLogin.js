import React, { Component } from "react";
import withFirebaseAuth from "react-auth-firebase";
import firebase from "./../components/firebase/firebase";
import Home from "./../files/home";
import ParticlesContainer from './../components/Particlecontainer'
import { Card } from "react-bootstrap";


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
      console.log()
      localStorage.setItem('Name',user.displayName)
      localStorage.setItem('Email',user.email)
      localStorage.setItem('url',user.photoURL)
      localStorage.setItem('uid' , user.providerData[0].uid)
      this.props.history.push('/feed');

    }
    return (
      <div className = 'container'>
          <ParticlesContainer/>
            <Card>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          {!user && (
            <button
              type="submit"
              onClick={() => signInWithEmail(email, password)}
            >
              SignIn
            </button>
          )}
        </form>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Email"
            onChange={e =>
              this.setState({
                email: e.target.value
              })
            }
            value={email}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
            value={password}
          />{" "}
          <br />
          <button
            type="submit"
            onClick={() => signUpWithEmail(email, password)}
          >
            SignUp
          </button>
        </form>
        <br />
        <button onClick={signInWithGoogle}>Signin with Google</button> <br />
        <button onClick={signInWithFacebook}>Signin with Facebook</button>{" "}
        <br />
        <button onClick={signInWithGithub}>Signin with Github</button> <br />
        <button onClick={signInWithTwitter}>Signin with Twitter</button> <br />
                </Card.Body>
            </Card>
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
