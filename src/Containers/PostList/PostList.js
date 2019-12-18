import React, { Component } from "react";
import PostItem from "Components/PostItem";
import { inject, observer } from "mobx-react";
import "./PostList.scss";

@inject("posts")
@observer
class PostList extends Component {
  componentDidMount() {
    this.props.posts.getPosts();
  }
  render() {
    return (
      <div className="post-list-container">
        {this.props.posts.posts.map(post => {
          return <PostItem {...post} />;
        })}
      </div>
    );
  }
}

export default PostList;
