import React from "react"
import PropTypes from "prop-types"


export default class Heading extends React.PureComponent {
  static propTypes = {
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    appearance: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  }

  static defaultProps = {
    element: "h1"
  }


  render() {
    const props = {
      className: this.props.appearance ? this.props.appearance : this.props.element
    }

    return React.createElement(this.props.element, props, this.props.children)
  }
}
