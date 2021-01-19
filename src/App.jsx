import React from "react";

export default class App extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8000/user/hello").then(r => console.log(r.json()))
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
};
