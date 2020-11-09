import React from 'react';

class Greeting extends React.Component {

    userGreeting() {
        return <h1>user Hello!!</h1>;
    }

    guestGreeting() {
        return <h1>guest Hello!!</h1>
    }

    render() {
        let greetDom = '';
        if (this.props.loginFlag) {
            greetDom = this.userGreeting();
        } else {
            greetDom = this.guestGreeting();
        }

        return greetDom;
    }
}

export default Greeting;