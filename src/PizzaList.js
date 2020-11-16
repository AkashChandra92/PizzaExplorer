import React from "react";
import { connect } from "react-redux";

class PizzaList extends React.Component {
  state = {
    newPizzaName: "",
    selectedPizzaId: ""
  };

  handleAddClick = () => {
    console.log("TODO: add this pizza:", this.state.newPizzaName);
    
    // mapDispatchToProps(this.state.newPizzaName)

    this.props.addPizza(this.state.newPizzaName)
    
    console.log("this is to test if the mapDispatchtoProps worked or not")
    
    // this.props.dispatch({
    //   type: "ADD_PIZZA",
    //   payload: {
    //     id: Math.floor(Math.random() * 10000),
    //     name: this.state.newPizzaName,
    //   },
    // });
  };


  handlePizzaClick =(id) => {
    // this.setState({selectedPizza:target.value})
    // console.log(`pizza ${id} was selected`)
    console.log("a pizza was selected with id: ", id)
    this.setState({selectedPizzaId: id})
    // this.props.selectPizza(this.state.selectedPizzaId)
  }

  render() {
    return (
      <div>
        <h1>Pizza Explorer</h1>
        <ul>
          {this.props.pizzas.map((pizza) => {
            return <li key={pizza.id} onClick ={()=> this.handlePizzaClick(pizza.id)}>{pizza.name}</li>;
          })}
        </ul>
        <p>
          New pizza:
          <input
            value={this.state.newPizzaName}
            description={this.state.newPizzaDescription}
            onChange={(e) => {
              this.setState({ newPizzaName: e.target.value });
            }}
          />
          <button onClick={this.handleAddClick}>Add</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    pizzas: reduxState.pizzaList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPizza(pizzaName) {
      dispatch({
        type: "ADD_PIZZA",
        payload: {
          id: Math.floor(Math.random() * 10000),
          name: pizzaName,
        },
      });
    },
    // selectPizza = (id) => {
      //     this.props.dispatch({
      //         type: "SELECT_PIZZA",
      //         payload: id
      //     })
      //     console.log("selected pizza:", id)
      // }
      // selectPizza
    // selectPizza(pizzaName){
    //   console.log("trying to dispatch selected pizza")
    //   dispatch({
    //     type: "SELECT_PIZZA",
    //     payload:{
    //       id:"",
    //       name: ""
    //     }
    //   })
    // }
  };
}

// const connectingHOC = connect(mapStateToProps,  );
const connectingHOC = connect(mapStateToProps, mapDispatchToProps );

const ConnectedPizzaList = connectingHOC(PizzaList);

export default ConnectedPizzaList;
