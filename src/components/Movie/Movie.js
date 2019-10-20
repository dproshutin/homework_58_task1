import React, {Component} from 'react';
import InputField from '../UI/InputField/InputField';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <InputField
                    title={this.props.title}
                    change={() => this.change()}
                />
            </div>
        );
    }
}

export default Movie;