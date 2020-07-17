import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class Blog extends Component {
  state = {
    posts: ["fact 1", "fact 2", "fact 3"],
  };

  render() {
    let posts = this.props.pts.map((post) => {
      return <Post fact={post} />;
    });
    return (
      <div>
        <h1>Cycling Facts</h1>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pts: state.posts,
  };
};

// const mapFuncToProps = () => {};

export default connect(mapStateToProps)(Blog);
