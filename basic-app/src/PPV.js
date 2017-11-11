import React, { Component } from 'react';
import brocklesnar from './imgs/brocklesnar.png';
import ajstyles from './imgs/ajstyles.png';
class PPV extends Component {
  render() {
    return (
      <section>
        <h1 className="_title">Surviour Series</h1>
        <h2>Updated Card</h2>
        <ul className="card">
          <li>
            <h3>Brock Lesnar v A.J. Styles</h3>
            <section className="card__match">
              <div className="card__wrestler">
                <img className="card__wrestler-img" src={brocklesnar} />
                <p className="card__wrestler-info">Brock Lesnar</p>
              </div>
              <div className="card__wrestler">
                <img className="card__wrestler-img" src={ajstyles} />
                <p className="card__wrestler-info">A.J. Styles</p>
              </div>
            </section>
          </li>
        </ul>
      </section>
    )
  }
}

export default PPV;
