import React from "react";

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
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
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fishKey => <Fish key={fishKey} details={this.state.fishes[fishKey]} />)}
          </ul>
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;
