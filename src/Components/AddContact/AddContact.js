import React from "react";
import "./AddContact.css";
import { Redirect } from "react-router-dom";

class AddContact extends React.Component {
    state = {
        name: null,
        address: null,
        gender: "men",
        telNumber: null,
        email: null,
        avatar: null,
        isRedirect: false
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
        const { name, address, telNumber, email, avatar, isRedirect } = this.state
        this.setState({
            isRedirect:true
        });
        this.props.onAddContact(
            name,
            address,
            telNumber,
            email,
            avatar
        );
    };
    render() {
        if (this.state.isRedirect){
            return <Redirect to="/"/>
        }
        return (
            <div className="container">
                <form onSubmit={this.onSendData} className="add-form">
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
                    <button className="btn btn-success addbutton" type="submit">Add new contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;