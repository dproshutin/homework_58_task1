import React, {Component} from 'react';
import './WatchList.css';
import Button from "../../components/UI/Button/Button";

class WatchList extends Component {
    state = {
        movies: [],
        isWatchListEmpty: true,
        newMovie: ''
    };
    render() {
        return (
            <div>
                <input type="text"/>
                <Button
                    btnType="add"
                    click={this.addMovie}
                    value="Add"
                />
                <p>To watch list:</p>
            </div>
        );
    }
}

export default WatchList;