import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

import Hexagons from '../components/home/Hexagons';

export default withSiteData(() => (
  <div>
    <h1 className="text-center text-uppercase">Cora Mylene Tattoos</h1>
    <Hexagons />
  </div>
))
