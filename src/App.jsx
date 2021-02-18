import React from "react";

export default class App extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8000/user/sorry?name=123").then(r => console.log(r.body))
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
};
