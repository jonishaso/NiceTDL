import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Modal extends Component {
  // constructor(props){
  //   super(props);
  //   this.close = this.close.bind(this);
  // }
  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    if (!this.props.isOpen)
      return null

    let modalStyle = {
      position: 'absolute',
      width: '59%',
      height: '59%',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div style={modalStyle}>
          <form>
            <fieldset class="form-group">
              <legend>Radio buttons</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                    Option one is this and that&mdash;be sure to include why it's great
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                    Option two can be something else and selecting it will deselect option one
                  </label>
                </div>
                <div class="form-check disabled">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
                    Option three is disabled
                    </label>
                </div>
  </fieldset>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" />
                  Check me out
                    </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
                </div>
          {/*<div style={backdropStyle} onClick={e => this.close(e)} />*/}
        </div>
        )
  }
}

export default Modal;



{/*<p className="display-4">
  This page enable to add todo in the input form on left, and is able to filter todos by click ALL, COMPELTED, and ACTIVE below, removing a todo by click the cross in the list, and click one todo for marking it complelted status.
          </p>*/}