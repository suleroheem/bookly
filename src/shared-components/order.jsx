import React from 'react';

import Header from '../header/header';
import Orderpages from '../header/orderpages';


const Order = ()=>{
    return(
  <div>
    <Header/> 
    { <Orderpages/> }
  </div>
    )
}

export default Order;