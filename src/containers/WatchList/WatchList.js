import React, {Component} from 'react';
import './WatchList.css';
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";

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
    render() {
        console.log(this.state);
        let movieList = null;

        if (this.state.isWatchListEmpty) {
            movieList = (
                <form>
                    <p>Movies to watch will be here</p>
                </form>
            );
        }
        return (
            <div className="WatchListWrapper">
                <InputField
                    name={this.state.newMovie}
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