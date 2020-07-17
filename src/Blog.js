import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Post from "./Post";

class Blog extends Component {
  render() {
    let posts = this.props.pts.map((post) => {
      return <Post id={post.id} title={post.title} image={post.image} />;
    });
    return (
      <div>
        <h1>Cycling Facts</h1>
        <Grid container>{posts}</Grid>
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
