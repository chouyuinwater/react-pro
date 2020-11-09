import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: true}

        /**
         * bind() 方法创建一个新的函数，
         * 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
         * 而其余参数将作为新函数的参数，供调用时使用。
         *
         * 在class中 把方法赋值给变量，this不会跟着传递，需要手动绑定
         *
         * @type {any}
         */
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * setState 传递参数为一个函数，对state进行设置
     * 函数参数为原state 和 props
     */
    handleClick() {
        this.setState(state => ({
            status: !state.status
        }));
    }

    handleLog() {
        console.log('handle is here')
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.status? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle;