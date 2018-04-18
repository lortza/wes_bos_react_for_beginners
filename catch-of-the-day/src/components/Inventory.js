import React from "react";
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

class Inventory extends React.Component {
  render(){
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(fishKey => <EditFishForm key={fishKey} fishKey={fishKey} fish={this.props.fishes[fishKey]} updateFishInInventory={this.props.updateFishInInventory}/>)}

        <AddFishForm addFishToInventory={this.props.addFishToInventory}/>
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
