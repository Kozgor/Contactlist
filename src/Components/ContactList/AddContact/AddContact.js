import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
    state = {
        name: null,
        address: null,
        gender: "men",
        telNumber: null,
        email: null,
        avatar: null
    };

    getName = event => {
        this.setState({
            name: event.target.value
        });
    };
    getTelNumber = event => {
        this.setState({
            telNumber: event.target.value
        });
    };
    getAddress = event => {
        this.setState({
            address: event.target.value
        });
    };

    getEmail = event => {
        this.setState({
            email: event.target.value
        });
    };
    getAvatar = event => {
        this.setState({
            avatar: event.target.value
        });
    };
    onSendData = event => {
        event.preventDefault();
        const { name, address, telNumber, email, avatar } = this.state
        this.props.onAddContact(
            name,
            address,
            telNumber,
            email,
            avatar
        );
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSendData}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        onChange={this.getName}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="form-control"
                        onChange={this.getAddress}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        onChange={this.getEmail}
                    />
                    <input
                        type="text"
                        placeholder="Tel number"
                        className="form-control"
                        onChange={this.getTelNumber}
                    />
                    <input
                        type="number"
                        min="1"
                        max="99"
                        placeholder="avatar"
                        className="form-control"
                        onChange={this.getAvatar}
                    />
                    <span>
                    <input className="radiobtn"
                        type="radio"
                        name="gender"
                        className="form-check-input"
                        value="man"
                        id="gender_man"
                    />
                    <label htmlFor="gender_man" className="form-check-label">Man</label>
                    <input className="radiobtn"
                        type="radio"
                        name="gender"
                        className="form-check-input"
                        value="woman"
                        id="gender_woman"
                    />
                    <label htmlFor="gender_woman" className="form-check-label">Woman</label>
                    </span>
                    <button className="btn btn-success" type="submit">Add new contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;