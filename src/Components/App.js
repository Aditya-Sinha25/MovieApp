import React from 'react';
import {data} from '../data';
import {addMovies} from '../actions';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component{
  componentDidMount(){
    const {store} =this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {data.map(movie => (<MovieCard movie={movie} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
