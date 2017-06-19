// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxATC extends React.Component {
  	render() {
			// Were we supplied with the ASIN?
			// If so, there must be multiple ASINs
      if (this.props.suppliedAsin) {
        var currentAsin = this.props.suppliedAsin;
      } else {
				for(var asin in this.props.formattedAsins) break;
        var currentAsin = this.props.formattedAsins[asin];
      }

			return (
        <div className="a-row a-span12">
          <span className="a-button a-button-primary">
            <span className="a-button-inner">
              <a href={currentAsin.addToCartLink}
                  className="a-button-text a-text-center"
                  role="button">
                  {currentAsin.addToCartCopy}
              </a>
            </span>
          </span>
        </div>
  		);
  	}
}

export default BuyBoxATC;
