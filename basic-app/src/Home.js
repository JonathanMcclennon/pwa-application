import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return <ul>
      <li className="ppv__event"><Link to="/ppv/ss">Surviour Seriers</Link></li>
      <li className="ppv__event">TLC</li>
      <li className="ppv__event">Hell in a Cell</li>
      <li className="ppv__event">No Mercy</li>
      <li className="ppv__event">Summerslam</li>
    </ul>
  }
}

export default Home;
