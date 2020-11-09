import React from 'react';

// function Clock(props) {
//     return (
//         <div>
//             <h1>{props.name} Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

class ClockNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
        // this.state.date = new Date();
    }

    /**
     * 挂载
     */
    componentDidMount() {
        this.time = setInterval(() => this.tick(), 1000);
    }

    /**
     * 卸载
     */
    componentWillUnmount() {
        clearInterval(this.time);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}, hello!</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default ClockNew;