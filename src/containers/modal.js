import React, { Component } from 'react';


const modal_show = {
    display: "block",/* Hidden by default */
    position: "fixed", /* Stay in place */
    zIndex: 1, /* Sit on top */
    paddingTop: "100px", /* Location of the box */
    left: 0,
    top: 0,
    width: "100%", /* Full width */
    height: "100%", /* Full height */
    overflow: "auto", /* Enable scroll if needed */
    backgroundColor: "rgb(0,0,0)", /* Fallback color */
    backgroundColor: "rgba(0,0,0,0.4)", /* Black w/ opacity */
}
const modal_hide = {
    display: "none",/* Hidden by default */
    position: "fixed", /* Stay in place */
    zIndex: 1, /* Sit on top */
    paddingTop: "100px", /* Location of the box */
    left: 0,
    top: 0,
    width: "100%", /* Full width */
    height: "100%", /* Full height */
    overflow: "auto", /* Enable scroll if needed */
    backgroundColor: "rgb(0,0,0)", /* Fallback color */
    backgroundColor: "rgba(0,0,0,0.4)", /* Black w/ opacity */
}
const modal_content = {
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%"
}
const close = {
    color: "#aaaaaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold"
}

class Modal extends Component {
    constructor() {
        super()
        this.state = { isShowModal: true }
        this.handleModalShow = this.handleModalShow.bind(this)
    }
    handleModalShow() {
        this.setState({ isShowModal: false })
    }
    render() {
        return (
            <div style={this.state.isShowModal ? modal_show : modal_hide}>
                <div style={modal_content}>
                    <span style={close} onClick={this.handleModalShow}>&times;</span>
                    <p>
                        Build responsive, mobile-first projects on the web with the world's most popular front-end component library.Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.Get started Downloads
                    </p>
                </div>
            </div>
        )
    }
}

export default Modal;