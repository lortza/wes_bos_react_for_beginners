import React from "react";
import { formatPrice } from '../helpers'

class Order extends React.Component {

  isAvailable = (fish) => { return fish.status === 'available' }

  getFish = (key) => { return this.props.fishes[key] }

  getCount = (key) => { return this.props.order[key] }

  renderOrder = (key) => {
    let fish = this.getFish(key)
    let count = this.getCount(key)
    if(this.isAvailable(fish)){
      return <li key={key}>
        {count} lbs {fish.name}
        <span className="right">{formatPrice(count * fish.price)}</span>
      </li>
    } else {
      return <li key={key}>
        Sorry {fish ? fish.name : 'this fish'} is no longer available
      </li>
    }
  }

  render(){
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      let fish = this.getFish(key)
      let count = this.getCount(key)
      if(this.isAvailable(fish)){
        return prevTotal + (count * fish.price)
      }
      return prevTotal
    }, 0)
    return (
      <div className="order-wrap">
        <h2>Order!</h2>
        <ul className="order">
          {orderIds.map( this.renderOrder )}
        </ul>
        <div className="total">Total: <strong><span className="right">{formatPrice(total)}</span></strong></div>
      </div>

    )
  }
}

export default Order;
