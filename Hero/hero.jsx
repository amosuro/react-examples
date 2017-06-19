import React from 'react';
import ReactDOM from 'react-dom';

export class Hero extends React.Component {
  render() {
    var divStyle = {
      backgroundImage: 'url(' + adxCustom.hero.background_url + ')'
    }

    return (
      <div className="adx-hero" style={divStyle}>
        <div className="adx-hero__content">
          <div className="a-row a-span12">
            <div className="a-column a-span2"></div>
            <div className="a-column a-span8">
              <img src={adxCustom.hero.logo_url} className="adx-hero__content__logo" width="200" />
              <h1 className="adx-hero__content__message">{adxCustom.hero.message}</h1>
            </div>
            <div className="a-column a-span2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
