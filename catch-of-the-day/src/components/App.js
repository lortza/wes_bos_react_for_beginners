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
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    })
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
          <Inventory addFishToInventory={this.addFishToInventory} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;
