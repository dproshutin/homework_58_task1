import React, {Component} from 'react';
import './WatchList.css';
import uuid from 'uuid/v1';
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";
import Movie from "../../components/Movie/Movie";

class WatchList extends Component {
    state = {
        movies: [],
        newMovie: ""
    };

    componentDidMount() {
        let savedMovies = localStorage.getItem("movies");
        savedMovies = JSON.parse(savedMovies) || [];
        this.setState({movies: savedMovies});
    }

    componentDidUpdate() {
        localStorage.setItem("movies", JSON.stringify(this.state.movies));
    }

    changeNewMovie = (event) => {
        const newMovie = event.target.value;
        this.setState({newMovie});
    };
    changeMovie = (event, id) => {
        const value = event.target.value;
        this.setState(prevState => {
            const movies = [...prevState.movies];
            const index = movies.findIndex(item => id === item.id);
            movies[index].title = value;
            return {movies: movies};
        });
    };

    removeMovie = (id) => {
        this.setState(prevState => {
            const movies = [...prevState.movies];
            const index = movies.findIndex(item => id === item.id);
            movies.splice(index, 1);
            return {movies: movies};
        });
    };

    addMovie = () => {
        if (this.state.newMovie !== "") {
            this.setState(prevState => {
                const newMovie = {title: prevState.newMovie, id: uuid()};
                const movies = [...prevState.movies];
                movies.push(newMovie);
                return {movies: movies, newMovie: ''};
            });
        }
        return;
    };
    render() {
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
                    change={(e) => this.changeMovie(e, movie.id)}
                    key={movie.id}
                    remove={() => this.removeMovie(movie.id)}
                />
            ));
        }
        return (
            <div className="WatchListWrapper">
                <InputField
                    title={this.state.newMovie}
                    placeholder="Add a new movie"
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