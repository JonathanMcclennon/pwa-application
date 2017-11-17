import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const results = await axios('//localhost:3001/api/ppvs');
    this.setState({ results: results.data.body, isLoading: false })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Fetching ppvs</div>
    }
    const ppvs = this.state.results.map((result) => {
      return <li key={result.id} className="ppv__event"><Link to={`/ppv/${result.id}`}>{result.name}</Link></li>
    });

    return <ul>
      {ppvs}
    </ul>
  }
}

export default Home;
