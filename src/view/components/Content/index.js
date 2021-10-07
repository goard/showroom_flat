import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Element from "./Element";

const Content = ({ data }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
      {data.map((el, index) => (
        <Grid item xs={12} sm={4} md={4} key={el.id}>
          <Element el={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
