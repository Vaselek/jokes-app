import React, {Component} from 'react';
import Joke from "./Joke";

class JokeList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.jokes && this.props.jokes.map(joke => (
          <Joke value={joke.value}
                icon_url={joke.icon_url}
                id={joke.id}
          />
        ))}
      </ul>
    );
  }
}

export default JokeList;