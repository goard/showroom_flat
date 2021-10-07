import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Element = ({ el }) => {
  const [state, setState] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    setState((prev) => !prev);
  };

  return (
    <Card elevation={5}>
      <CardMedia
        component="img"
        height="194"
        image="https://via.placeholder.com/450"
        alt="flat"
      />
      {el.type === "flat" && (
        <CardContent>
          <Typography variant="body2">{el.attributes.title}</Typography>
          <Box display="flex" alignItems="baseline">
            <Typography
              color="blue"
              sx={{ fontSize: "0.75rem", paddingRight: "5px" }}
            >
              {el.attributes.rooms}-комн. квартира
            </Typography>
            <Typography
              sx={{
                fontSize: "0.75rem",
                paddingLeft: "5px",
                borderLeft: "1px solid #d6dadc",
              }}
            >
              {el.attributes.area}{" "}
              {el.attributes.unit === "квм" && (
                <span>
                  м <sup>2</sup>
                </span>
              )}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.75rem" }}>
            ул. {el.attributes.address.street}, д. {el.attributes.address.house}
          </Typography>
        </CardContent>
      )}
      <CardActions>
        <IconButton onClick={clickHandler}>
          <FavoriteIcon color={state ? "error" : ""} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Element;
