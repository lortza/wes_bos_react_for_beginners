import React from "react";

class EditFishForm extends React.Component {

  handleUpdate = (e) => {
    console.log(e.currentTarget.value)
    // 1. Get copy of current fish and insert the new value in it
    let updatedFish = {
      ...this.props.fish,
      // 2. Use the input's name field to get the proper field key name
      [e.currentTarget.name]: e.currentTarget.value
    }
    // 3. Send the updated fish back upstream. hey oh!
    this.props.updateFishInInventory(this.props.fishKey, updatedFish)

  }

  render(){
    const fish = this.props.fish
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          placeholder={fish.name}
          onChange={this.handleUpdate}
          value={fish.name}
        />
        <input
          type="text"
          name="price"
          placeholder={fish.price}
          onChange={this.handleUpdate}
          value={fish.price}
        />
        <select
          name="status"
          placeholder={fish.status}
          onChange={this.handleUpdate}
          value={fish.status} ref={this.statusRef}
          >
            <option placeholder={fish.name} value="available">Fresh!</option>
            <option placeholder={fish.name} value="sold out">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder={fish.desc}
          onChange={this.handleUpdate}
          value={fish.desc}
        />
        <input
          type="text"
          name="image"
          placeholder={fish.image}
          onChange={this.handleUpdate}
          value={fish.image}
        />
      </div>
    )
  }
}

export default EditFishForm;
