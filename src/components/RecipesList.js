import React, { Component } from "react";
import Recipe from "./Recipe";
class RecipesList extends Component {
  render() {
    const recipeList = [...Array(20)].map((_, index) => {
      const props = {
        name: `Card-${index}`,
        description: `I am Card ${index}`,
        imgurl: ``,
      };
      return <Recipe key={props.name} {...props} />;
    });
    return <div className="grid-list">{recipeList}</div>;
  }
}

export default RecipesList;
