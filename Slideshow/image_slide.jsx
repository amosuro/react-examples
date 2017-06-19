import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class ImageSlide extends React.Component {
  render() {
    var classes = classNames({
      'adx-slide': true,
      [`adx-slide__${this.props.currentSlide}`]: true
    });

    var styles = {
      backgroundImage: "url(" + this.props.imageUrl + ")",
      height: this.props.slideshowStyles.height
    }

    return (
      <div className={classes} style={styles}></div>
    );
  }
}

export default ImageSlide;
