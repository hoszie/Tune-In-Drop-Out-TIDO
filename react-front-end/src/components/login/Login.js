import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SpotifyLogin from 'react-spotify-login';
import classNames from 'classnames';
import './Login.scss';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirectToUserPage: false };
  }

  render() {
    const onSuccess = response => {
      console.log(response);
      this.setState({ redirectToUserPage: true });
    };
    const onFailure = response => console.error(response);
    const buttonText = (
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt="login-logo"
        />
        &nbsp;&nbsp;<span>Login with Spotify</span>
      </div>
    );
    if (this.state.redirectToUserPage === true) {
      return <Redirect to="/" />;
    }

    const login = classNames('form--login');
    const email = classNames('input--email');
    const password = classNames('input--password');
    const loginButton = classNames('button--login');

    return (
      <div className="login-page">
        <h1>TiDo</h1>
        <section className="login-form">
          <form className={login}>
            <input className={email} placeholder="Email"></input>
            <input className={password} placeholder="Password"></input>
            <button className={loginButton}> Login</button>
            <SpotifyLogin
              type="button"
              className="btn btn-dark"
              buttonText={buttonText}
              clientId={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
              redirectUri={process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
              scope={process.env.REACT_APP_SPOTIFY_SCOPE}
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
          </form>
        </section>
      </div>
    );
  }
}
export default LoginPage;