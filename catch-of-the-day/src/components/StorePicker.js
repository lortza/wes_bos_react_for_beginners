import React from 'react';


// Create a class that extends a react component
class StorePicker extends React.Component {
  // tell it what to render
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store --> </button>
      </form>
    )
  }
}

export default StorePicker;
