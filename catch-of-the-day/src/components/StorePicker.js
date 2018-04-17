import React from 'react';
import { getSillyName } from '../helpers';

// Create a class that extends a react component
class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = (e) => {
    // 1. stop form from submitting
    e.preventDefault()
    // 2. get text from input
    const storeName = this.myInput.value.value
    // 3. change page to store name
    this.props.history.push(`/store/${storeName}`)
  }
  // tell it what to render
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getSillyName()}/>
        <button type="submit">Visit Store --> </button>
      </form>
    )
  }
}

export default StorePicker;
