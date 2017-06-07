import React, { Component } from 'react';
import '../style/game.css';

const selectedCell = {
  background: "white"
}

const randomCell = {
  background: "green"
}
const crashCell = {
  background: "orange"
}

let sytleShow = (self, randomString, currentString) => {
  // isCurrent = selectedCell , isRandom = randonCell, isBoth = crashCell, Nothing =0
  if (self === currentString && self === randomString) return crashCell
  if (self !== currentString && self === randomString) return randomCell
  if (self === currentString && self !== randomString) return selectedCell
  if (self !== currentString && self !== randomString) return {}
}

class GameApp extends Component {
  constructor() {
    super();
    this.state = {
      X: 0,
      Y: 0,
      a: Math.floor(Math.random() * 3),
      b: Math.floor(Math.random() * 3),
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress() {
    switch (window.event.keyCode) {
      case 37: {
        if (this.state.Y !== 0) {
          if ((this.state.Y - 1) === this.state.b && (this.state.X) === this.state.a) {
            this.setState({
              Y: (this.state.Y - 1),
              a: Math.floor(Math.random() * 3),
              b: Math.floor(Math.random() * 3),
            })
          }
          else
            this.setState({ Y: (this.state.Y - 1) })
        }
        break;
      }
      case 38: {
        if (this.state.X !== 0) {
          if ((this.state.X - 1) === this.state.a && (this.state.Y) === this.state.b) {
            this.setState({
              X: (this.state.X - 1),
              a: Math.floor(Math.random() * 3),
              b: Math.floor(Math.random() * 3),
            })
          }
          else
            this.setState({ X: (this.state.X - 1) })
        }

        break;
      }
      case 39: {
        if (this.state.Y !== 3) {
          if ((this.state.Y + 1) === this.state.b && (this.state.X) === this.state.a) {
            this.setState({
              Y: (this.state.Y + 1),
              a: Math.floor(Math.random() * 3),
              b: Math.floor(Math.random() * 3),
            })
          }
          else
            this.setState({ Y: (this.state.Y + 1) })
        }
        break;
      }
      case 40: {
        if (this.state.X !== 3) {
          if ((this.state.X + 1) === this.state.a && (this.state.Y) === this.state.b) {
            this.setState({
              X: (this.state.X + 1),
              a: Math.floor(Math.random() * 3),
              b: Math.floor(Math.random() * 3),
            })
          }
          else
            this.setState({ X: (this.state.X + 1) })
        }
        break;
      }
      default:
    }
    return
  }



  render() {
    let currentPosition = this.state.X.toString() + '-' + this.state.Y.toString();
    let randomPositio = this.state.a.toString() + '-' + this.state.b.toString();
    return (
      <div className="container-fluid" style={{ background: "#222" }}>
        <div className="row">
          <p className="lead col-sm-5 my-1 offset-sm-3 " style={{ color: "white" }}>
            Try to catch the Green BoX, if the Box turn to organge, means you got it.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-7 offset-sm-3 mb-1 mt-4">
            <div className="grid-cell" style={sytleShow('0-0', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('0-1', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('0-2', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('0-3', randomPositio, currentPosition)} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7 offset-sm-3 my-2">
            <div className="grid-cell" style={sytleShow('1-0', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('1-1', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('1-2', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('1-3', randomPositio, currentPosition)} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7 offset-sm-3 my-2">
            <div className="grid-cell" style={sytleShow('2-0', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('2-1', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('2-2', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('2-3', randomPositio, currentPosition)} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7 offset-sm-3 mb-5 mt-1">
            <div className="grid-cell" style={sytleShow('3-0', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('3-1', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('3-2', randomPositio, currentPosition)} />
            <div className="grid-cell" style={sytleShow('3-3', randomPositio, currentPosition)} />
          </div>
        </div>
      </div>
    )
  }
}

export default GameApp;
