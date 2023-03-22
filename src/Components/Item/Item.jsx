import React from "react";

//import styles from "./Item.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const Item = ({ elemento }) => {
  return (    
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={elemento.img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {elemento.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {elemento.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ver detalle</Button>

    </CardActions>
  </Card>
  );
};

export default Item;
