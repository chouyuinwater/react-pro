import React from 'react';
import Greeting from './Greeting';

function Logout(props) {
    const event = props.event;
    console.log('event = ', JSON.stringify(event));

    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

function Login(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {loginFlag: false}
    }

    handleLogin() {
        this.setState({loginFlag: true});
    }

    handleLogout() {
        this.setState({loginFlag: false});
    }


    render() {
        const loginFlag = this.state.loginFlag;
        let loginDom = '';
        let event = [{
            loginFlag: loginFlag,
            loginDom: 'this.handleLogout'
        }];

        if (loginFlag) {
            loginDom = <Logout event={event} onClick={this.handleLogout}/>;
        } else {
            loginDom = <Login onClick={this.handleLogin} />;

        }
        return (
            <div>
                <Greeting loginFlag={loginFlag}/>
                {loginDom}
            </div>
        )
    }
}

export default LoginController;