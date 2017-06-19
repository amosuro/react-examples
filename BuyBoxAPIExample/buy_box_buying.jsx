// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxBuyingCopy extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

    if (this.props.customBuyingCopy) {
      return (
				 <span>{this.props.customBuyingCopy}</span>
  		);
		} else {
      return (
         <span>{currentAsin.buyCopy}</span>
      );
		}
	}
}

export class BuyBoxBuyingPrice extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

    if (this.props.customBuyingPrice) {
      return (
				 <span>{this.props.customBuyingPrice}</span>
  		);
		} else {
      return (
         <span>{currentAsin.buyPrice}</span>
      );
		}
	}
}
