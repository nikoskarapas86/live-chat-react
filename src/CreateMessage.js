import { Component } from "react";


class CreateMessage extends Component {
    state = {
        message: ''
    }

    changeInput = (event) => {
        this.setState(() => ({ message: event.target.value }))
    }

    sendMessage = (event) => {
        event.preventDefault();
        this.props.onMessage(this.state.message)
    }

    isDisabled = () => {
        if (this.state.message == '') {
            return true
        }
        return false;
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <form onSubmit={this.sendMessage} className="input-group">
                    <input type="text" className="form-control" value={message} onChange={this.changeInput} />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form >
            </div>

        )
    }

}

export default CreateMessage;