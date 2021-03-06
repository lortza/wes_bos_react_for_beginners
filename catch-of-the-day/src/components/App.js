import React from "react";

// Import Components
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'

// Import data
import sampleFishes from '../sample-fishes'
import base from '../base'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  // After this component mounts (like DOMload), copy the state to firebase
  componentDidMount(){
    const { params } = this.props.match
    // Check for values in LocalStorage before loading from firebase
    const localStorageRef = localStorage.getItem(params.storeId)
    if(localStorageRef){
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    })
  }

  // Checks that a component did update
  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  }


  // Unmount the store after we leave it or else
  // we'll listen for ever and get memory leaks
  componentWillUnmount(){
    base.removeBinding(this.ref)
  }


  addFishToInventory = (fish) => {
    // 1. Make a copy of the existing state
    const newFishes = {...this.state.fishes}
    // 2. Add new fish to fishes const
    newFishes[`fish${Date.now()}`] = fish
    // 3. Set state to include new fishes
    this.setState({
      fishes: newFishes
    })
  }

  updateFishInInventory = (fishKey, updatedFish) => {
    // 1. Make a copy of the existing state
    const existingFishes = {...this.state.fishes}
    // 2. Update the current fish record
    existingFishes[fishKey] = updatedFish
    // 3. Set state to include new fishes
    this.setState({
      fishes: existingFishes
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (fishKey) => {
    // 1. Make a copy of the existing state
    const newOrderItems = {...this.state.order}
    // 2. Add new fish to order const OR update number of order
    newOrderItems[fishKey] = newOrderItems[fishKey] + 1 || 1
    // 3. Set state to include new order
    this.setState({
      order: newOrderItems
    })
  }
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fishKey => <Fish key={fishKey} keyName={fishKey} details={this.state.fishes[fishKey]} addToOrder={this.addToOrder}/>)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          addFishToInventory={this.addFishToInventory}
          updateFishInInventory={this.updateFishInInventory}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App;
