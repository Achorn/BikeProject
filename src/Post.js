import React from "react";
import { Card, CardContent } from "@material-ui/core";

const post = (props) => (
  <Card>
    <CardContent>{props.fact}</CardContent>
  </Card>
);

export default post;
