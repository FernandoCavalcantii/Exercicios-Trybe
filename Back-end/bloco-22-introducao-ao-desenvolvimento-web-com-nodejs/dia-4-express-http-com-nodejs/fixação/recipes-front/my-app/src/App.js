import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((recipes) =>
        this.setState({
          recipes,
        })
      );
  }

  render() {
    const { recipes } = this.state;

    return (
      <div>
        <div>
          <div>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
