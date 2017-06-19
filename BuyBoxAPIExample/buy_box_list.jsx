// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxListCopy extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

    if (this.props.customListCopy) {
      return (
				 <span>{this.props.customListCopy}</span>
  		);
		} else {
      return (
         <span>{currentAsin.listCopy}</span>
      );
		}
	}
}

export class BuyBoxListPrice extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

		if (this.props.customListPrice) {
      return (
				 <span>{this.props.customListPrice}</span>
  		);
		} else {
      return (
         <span>{currentAsin.listPrice}</span>
      );
		}
	}
}

export default BuyBoxListPrice;
