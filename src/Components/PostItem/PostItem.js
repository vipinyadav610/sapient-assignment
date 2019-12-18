import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./PostItem.scss";

class PostItem extends Component {
  render() {
    const {
      name,
      id,
      created,
      status,
      species,
      gender,
      origin,
      location,
      image
    } = this.props;
    return (
      <div className="image-card">
        <div className="post-item-card">
          <div className="image-content-wrapper">
            <img src={image} alt="Avatar" />
            <div className="image-detail-container">
              <h4>
                <b>{name}</b>
              </h4>
              <p>
                id: {id} - {moment(created).fromNow()}
              </p>
            </div>
          </div>
          <div className="card-attributes">
            <div>Status</div>
            <div>{status}</div>
          </div>
          <div className="card-attributes">
            <div>Species</div>
            <div>{species}</div>
          </div>
          <div className="card-attributes">
            <div>Gender</div>
            <div>{gender}</div>
          </div>
          <div className="card-attributes">
            <div>Origin</div>
            <div>{origin.name}</div>
          </div>
          <div className="card-attributes border-none">
            <div>Last Location</div>
            <div>{location.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  created: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.object,
  location: PropTypes.object,
  image: PropTypes.string
};
PostItem.defaultProps = {
  name: "",
  id: 0,
  created: "",
  status: "",
  species: "",
  gender: "",
  origin: {},
  location: {},
  image: ""
};

export default PostItem;
