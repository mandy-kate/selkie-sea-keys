import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class Cart extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { items } = this.props
    return (
      <div id="shoppingCart">
        {items.length}
        <FontAwesome
          name='fa-shopping-cart'
          className='fa fa-shopping-cart'
          aria-hidden='true'
          size='2x'
        />

      </div>
    )
  }

}

export default Cart
