import React from "react";
import "./EditContact.css";
import { Redirect } from "react-router-dom";


class Edit extends React.Component {
    state = {
        id: this.props.currentContact.id,
        name: this.props.currentContact.name,
        address: this.props.currentContact.address,
        gender: this.props.currentContact.gender,
        phone: this.props.currentContact.phone,
        email: this.props.currentContact.email,
        avatar: this.props.currentContact.avatar,
        isRedirect: this.props.currentContact.isRedirect
    };

    getName = event => {
        this.setState({
            name: event.target.value
        });
    };
    getTelNumber = event => {
        this.setState({
            phone: event.target.value
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
        const { id, name, address, phone, email, avatar } = this.state;
        this.props.onEditCurrentContact(id, name, address, phone, email, avatar);
        this.setState({
          isRedirect: true
        });
      };
    render() {
        const { name, address, phone, email, avatar } = this.state;
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
          }
        return (
            <div className="container-form">
                <form onSubmit={this.onSendData}>
                    <input
                        type="text"
                        placeholder={name}
                        className="form-control"
                        onChange={this.getName}
                    />
                    <input
                        type="text"
                        placeholder={address}
                        className="form-control"
                        onChange={this.getAddress}
                    />
                    <input
                        type="text"
                        placeholder={email}
                        className="form-control"
                        onChange={this.getEmail}
                    />
                    <input
                        type="text"
                        placeholder={phone}
                        className="form-control"
                        onChange={this.getTelNumber}
                    />
                    <input
                        type="number"
                        min="1"
                        max="99"
                        placeholder={avatar}
                        className="form-control"
                        onChange={this.getAvatar}
                    />
                    <button className="btn btn-success editbtn" type="submit">
                        Save chages
                    </button>
          </form>
        </div>
        );
    }
}

export default Edit;