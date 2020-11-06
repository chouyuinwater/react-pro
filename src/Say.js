import React from 'react';
import Hello from './helloWorld';


let Say = function (props) {
    console.log("Say props = " + JSON.stringify(props))
     return (
        <div>
            <h1>{props.user.name}Hello World!!!!</h1>
        </div>
    );
};


class Seed extends React.Component {
    render() {
        console.log("Seed props = " + JSON.stringify(this.props))
        return (
            <div>
                <h1>{this.props.User.name} Hello World!!!!</h1>
                <Hello />
                {/*<Say user="aaa" />*/}
            </div>
        );
    }
}

export {Say, Seed};