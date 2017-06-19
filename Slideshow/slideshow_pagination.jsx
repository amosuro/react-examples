import React from 'react';
import ReactDOM from 'react-dom';

export class SlideshowPagination extends React.Component {
  render() {
    var _this = this;
    var paginationNodes = this.props.data.map(function (paginationNode, index) {
      return (
        <SlideshowPager
          id={paginationNode.id}
          key={paginationNode.id}
          thumbUrl={paginationNode.thumb_url}
          slideIndex={index}
          setCurrentSlide={_this.props.setCurrentSlide} />
      );
    });

    return (
      <div className="adx-slideshow-pagination">
        {paginationNodes}
      </div>
    );
  }
}

class SlideshowPager extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSlide() {
    this.props.setCurrentSlide(this.props.slideIndex);
  };

  render() {
    return (
      <span className="adx-slideshow-pagination__btn" onClick={(event) => this.toggleSlide(event)}>
        <img src={this.props.thumbUrl} />
      </span>
    );
  }
}

export default SlideshowPagination;
