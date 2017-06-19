// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxReview extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
		if (this.props.suppliedAsin) {
			var currentAsin = this.props.suppliedAsin;
		} else {
			for(var asin in this.props.formattedAsins) break;
			var currentAsin = this.props.formattedAsins[asin];
		}

		if(currentAsin.stars){
			return (
        <div className="a-row a-span12">
  				<div className="a-icon-row a-spacing-none">
  					<a href={currentAsin.customerReviewLink}
  						className="a-link-normal"
  						target="_blank">
  						<i className={currentAsin.stars}></i>
  						<span className="a-letter-space"></span>
  						{currentAsin.reviewCount}
  					</a>
  				</div>
        </div>
  		);
		} else {
			return (
				<span></span>
			);
		}
	}
}

export default BuyBoxReview;
