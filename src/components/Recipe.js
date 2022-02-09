import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class Recipe extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={require("../assets/backgroundKitchen.png")}
          // image="assets/logo-rec.jpeg"
          alt="aaaa"
          title="bbbbb"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to sced</Button>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    );
  }
}
export default Recipe;
