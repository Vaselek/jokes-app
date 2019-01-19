import React, {Component} from 'react';
import Button from "../../components/Button/Button";
import JokeList from "../../components/Jokes/JokeList";

class JokesIndex extends Component {

  state = {
    jokes: []
  };


  componentDidMount() {
    this.requestJokes();
  }

  requestJokes = () => {
    let fetchPromiseArr = [];
    for (let i=0; i<5; i++) {
      fetchPromiseArr.push(
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
          if(response.ok) {
            return response.json()
          }
          throw new Error('Smt went wrong');
        })
      )
    };
    Promise.all(fetchPromiseArr).then(responses => {
      this.setState({jokes: responses})
    })
  };

  render() {
    return (
      <div>
        <Button className='btn btn-primary'
                title='Request New Jokes'
                onClick={this.requestJokes} />
        <JokeList jokes={this.state.jokes}/>
      </div>
    );
  }
}

export default JokesIndex;