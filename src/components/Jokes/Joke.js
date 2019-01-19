import React, {Component} from 'react';

class Joke extends Component {
  render() {
    return (
      <li key={this.props.id} className="list-group-item">
        <img src={this.props.icon_url} alt=""/>
        {this.props.value}
      </li>
    );
  }
}

export default Joke;