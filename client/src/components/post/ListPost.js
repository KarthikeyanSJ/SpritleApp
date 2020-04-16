import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { allPost } from "../../actions/authActions";
import { NavLink, Route } from 'react-router-dom';
import { Link, withRouter } from "react-router-dom";
import AddPost from '../post/AddPost';
import axios from 'axios';

class ListPost extends Component {
    state = {
        posts: [],
        comments: []
      };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    // this.props.allPost();
  }

  render() {
    const { user } = this.props.auth;
    // console.log('fdfdfdf',use)
    return (
    
      <div style={{ height: "15vh" }} className="container valign-wrapper">        
        <div className="row">  
        <ul className="collection">
            {this.state.posts.map(post => (
              <li
                key={post.title}
                className="collection-item left-align red lighten-3"
              >
                <h5>User ID: {post.title}</h5>
                <p>Post: {post.title}</p>
              </li>
            ))}
          </ul>        
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
            >
              Logout
            </button>
            
          <NavLink style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }} className="btn btn-large waves-effect waves-light hoverable blue accent-3" exact to="/post">Add Post</NavLink>         
          </div>
          <Route path="/post" component={AddPost}/>          
      </div>
      
    );
  }
}

ListPost.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ListPost);
