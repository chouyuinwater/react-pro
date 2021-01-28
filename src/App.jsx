import React from "react";

export default class App extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8000/user/hello").then(r => ( r.data)).then(data => (console.log(data)))
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
};
