import React from 'react'
import Hero from './Hero'
import { CONSTRUCTION_URL } from '../utils/constants'

const Cart = () => {
  return (
    <div>
      <Hero/>
      <div class="container-construction">
        <div>

        <h1>Page Under Construction!!</h1>
        <p>We promise...we are seriously working on it. Thanks for your curiosity!</p>
        </div>
        <img class="construction-image" src={CONSTRUCTION_URL} alt="Under Construction"/>
    </div>

    </div>
  )
}

export default Cart
