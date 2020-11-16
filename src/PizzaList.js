import React from "react";
import { connect } from "react-redux";

class PizzaList extends React.Component {
  state = {
    newPizzaName: "",
    selectedPizzaId: ""
  };

  handleAddClick = () => {
    console.log("TODO: add this pizza:", this.state.newPizzaName);

    // We were using this as option 1, without
    // mapDispatchToProps(this.state.newPizzaName). 

    // using bound action creators
    this.props.addPizza(this.state.newPizzaName)
        
    // this.props.dispatch({
    //   type: "ADD_PIZZA",
    //   payload: {
    //     id: Math.floor(Math.random() * 10000),
    //     name: this.state.newPizzaName,
    //   },
    // });
  };


  handlePizzaClick =(id) => {
    // console.log(`pizza ${id} was selected`)
    console.log("a pizza was selected with id: ", id)

    // We can set the local state and then send the value to the redux state but that causes a problem
    // of onclick behaving only while double clicking

    // this.setState({selectedPizzaId: id})
    // console.log("The state of select pizza:", this.state.selectedPizzaId)
    // this.props.selectPizza(this.state.selectedPizzaId)

    // To prevent that problem, we straightaway send the id to the redux state onClick of the li item
    this.props.selectPizza(id)
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

// this mapDispatchToProps was for one action
// function mapDispatchToProps(dispatch) {
//   return {
//     addPizza(pizzaName) {
//       dispatch({
//         type: "ADD_PIZZA",
//         payload: {
//           id: Math.floor(Math.random() * 10000),
//           name: pizzaName,
//         },
//       });
//     },
   
    // The selectPizza below were trials
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
//   };
// }

// This mapDispatchToProps is for multiple actions
const mapDispatchToProps = (dispatch) => ({
  addPizza: (pizzaName)=> dispatch({
            type: "ADD_PIZZA",
            payload: {
              id: Math.floor(Math.random() * 10000),
              name: pizzaName,
            },
          }),
  selectPizza: (id) => dispatch({
            type: "SELECT_PIZZA",
            payload: id
  })
});


// const connectingHOC = connect(mapStateToProps,  );
const connectingHOC = connect(mapStateToProps, mapDispatchToProps );

const ConnectedPizzaList = connectingHOC(PizzaList);

export default ConnectedPizzaList;
