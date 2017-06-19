import React from 'react';
import ReactDOM from 'react-dom';
import domEvents from 'attach-dom-events';
import selectParent from 'select-parent';

export class Modal extends React.Component {
  componentDidMount() {
    domEvents.on(document.querySelector('.adx-overlay'), {
      'click': this.closeOnOutsideClick.bind(this)
    });

    domEvents.on(document.body, {
      'keyup': this.closeOnEsc.bind(this)
    });
  }

  componentWillUnmount() {
    domEvents.off(document.querySelector('.adx-overlay'), {
      'click': this.closeOnOutsideClick.bind(this)
    });

    domEvents.off(document.body, {
      'keyup': this.closeOnEsc
    });
  }

  closeOnEsc(e) {
    if (e.keyCode === 27 && this.props.closeModal) {
      this.props.closeModal();
    }
  }

  closeOnOutsideClick(e) {
    if (!e.target.classList.contains('adx-modal__content') && !selectParent('.adx-overlay', e.target) && this.props.closeModal) {
      this.props.closeModal();
    }
  }

  render() {
    if (this.props.children) {
      var content = (
        <div>{this.props.children}</div>
      )
    } else {
      var content = (
        <h1>{this.props.modalContent}</h1>
      )
    }

    return (
        <div className="adx-overlay">
          <div className="adx-modal">
            <div className="adx-modal__close" onClick={this.props.closeModal}>X</div>
            <div className="adx-modal__content">
              {content}
            </div>
          </div>
        </div>
    )
  }
}

export default Modal;
