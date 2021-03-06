import React, { Component, Fragment } from "react";
import "./ContactItem.css";
import { Link } from "react-router-dom";
class ContactItem extends Component {
  state = {
    name: this.props.name,
    address: this.props.address,
    phone: this.props.phone,
    email: this.props.email,
    avatar: this.props.avatar,
    gender: this.props.gender,
    star: this.props.star
  };
  onRandomAvatar = () => {
    const avatar = Math.floor(Math.random() * Math.floor(99));
    this.setState({
      avatar: avatar
    });
  };
  render() {
    const { name, address, phone, email, avatar, gender } = this.state;
    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    if (this.props.star) {
      var favoriteStyle = "fa fa-star fa-1x fa-2x";
    } else {
      var favoriteStyle = "fa fa-star-o fa-1x fa-2x";
    }
    return (
      <Fragment>
        <li className="list-group-item">
          <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
              <img
                src={URL}
                alt={name}
                className="rounded-circle mx-auto d-block img-fluid"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span
                className="fa fa-trash fa-2x text-danger float-right pulse"
                title="delete"
                onClick={this.props.onDeleteContact}
              >
              </span>
              <Link to="/edit"
                onClick={this.props.onEditContact}
                className="fa fa-edit fa-2x float-right pulse"
                data-toggle="edit"
                title="edit"
              ></Link>
              <span
                className="float-right pulse">
                <i
                  className={favoriteStyle}
                  aria-hidden="true"
                  onClick={this.props.onStarChange}
                ></i>
              </span>
              <label className="name lead">{name + ""}</label>
              <br />
              <span
                className="fa fa-map-marker fa-fw text-muted"
                data-toggle="tooltip"
                title=""
                data-original-title={address}
              ></span>
              <span className="text-muted">{address}</span>
              <br />
              <span
                className="fa fa-phone fa-fw text-muted"
                data-toggle="tooltip"
                title=""
                data-original-title={phone}
              ></span>

              <span className="text-muted small">{phone}</span>
              <br />
              <span
                className="fa fa-envelope fa-fw text-muted"
                data-toggle="tooltip"
                data-original-title=""
                title=""
              ></span>
              <span className="text-muted small text-truncate">{email}</span>
            </div>
          </div>
        </li>
        <button className="btn btn-success" onClick={this.onRandomAvatar}>
          Random avatar
        </button>
      </Fragment>
    );
  }
}
export default ContactItem;
