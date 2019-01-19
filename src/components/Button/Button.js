import React, {Component} from 'react';

class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.title !== this.props.title ||
      nextProps.className !== this.props.className ||
      nextProps.onClick !== this.props.onClick;
  };
  render() {
    return (
      <button onClick={this.props.onClick}
              className={this.props.className}>{this.props.title}</button>
    );
  }
}

export default Button;