import React, {Component} from 'react';
import InputField from '../UI/InputField/InputField';
import './Movie.css';
import Button from "../UI/Button/Button";

class Movie extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.title !== this.props.title;
    }

    render() {
        console.log("Movie render");
        return (
            <div>
                <InputField
                    title={this.props.title}
                    placeholder={null}
                    change={this.props.change}
                />
                <Button
                    btnType="delete"
                    click={this.props.remove}
                    value="x"
                />
            </div>
        );
    }
}

export default Movie;