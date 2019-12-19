import React, { Component, Fragment } from "react";
import PostItem from "Components/PostItem";
import PostSearch from "Components/PostSearch";
import { inject, observer } from "mobx-react";
import "./PostList.scss";

@inject("posts")
@observer
class PostList extends Component {
  componentDidMount() {
    this.props.posts.getPosts();
  }
  render() {
    const {
      onSearchPost,
      filterPostList,
      onSortOrderChange,
      onSortByChange
    } = this.props.posts;
    return (
      <Fragment>
        <PostSearch
          onSearchPost={onSearchPost}
          onSortOrderChange={onSortOrderChange}
          onSortByChange={onSortByChange}
        />
        <div className="post-list-container">
          {filterPostList.map(post => {
            return <PostItem {...post} key={post.id} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default PostList;
