import React, {Component} from 'react';
import './WatchList.css';
import uuid from 'uuid/v1';
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";
import Movie from "../../components/Movie/Movie";

class WatchList extends Component {
    state = {
        movies: [],
        isWatchListEmpty: true,
        newMovie: ''
    };

    changeNewMovie = (event) => {
        const newMovie = event.target.value;
        this.setState({newMovie});
    };
    changeMovie = (event, id) => {
        this.setState(prevState => {
            const movies = [...prevState.movies];
            const index = movies.findIndex(item => id === item.id);
            console.log(event.target.value);
            movies[index].title = event.target.value;
            return {movies: movies};
        });
    };

    addMovie = () => {
        this.setState(prevState => {
            const newMovie = {title: prevState.newMovie, id: uuid()};
            const movies = [...prevState.movies];
            movies.push(newMovie);
            return {movies: movies, newMovie: ''};
        });
    };
    render() {
        console.log(this.state);
        let movieList = null;

        if (this.state.movies.length === 0) {
            movieList = (
                <form>
                    <p>Movies to watch will be here</p>
                </form>
            );
        } else {
            movieList = this.state.movies.map(movie => (
                <Movie
                    title={movie.title}
                    change={() => this.changeMovie}
                    key={movie.id}
                />
            ));
        }
        return (
            <div className="WatchListWrapper">
                <InputField
                    title={this.state.newMovie}
                    change={this.changeNewMovie}
                />
                <Button
                    btnType="add"
                    click={this.addMovie}
                    value="Add"
                />
                <p>To watch list:</p>
                {movieList}
            </div>
        );
    }
}

export default WatchList;