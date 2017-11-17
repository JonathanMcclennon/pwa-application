import React, { Component } from 'react';
import axios from 'axios';
import Match from './Match';
class PPV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const { match } = this.props;
    const ppvcard = await axios(`//localhost:3001/api/ppvs/${match.params.id}`);
    this.setState({ ppvcard: ppvcard.data.body, isLoading: false})
  }

  render() {
    if(this.state.isLoading) {
      return <div>Fetching card</div>
    }

    const matches = this.state.ppvcard.map((match) => {
      return <Match key={match.id} {...match} /> 
    })

    return (
      <section>
        <h1 className="_title">Surviour Series</h1>
        <ul className="card">
          { matches }
        </ul>
      </section>
    )
  }
}

export default PPV;
