import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMovies } from "../Actions";
import { Link } from "react-router-dom";

class MovieList extends Component {

    async componentDidMount() {
        await this.props.fetchMovies(this.props.match.params.id)
    }

    renderMovies() {
        return this.props.movies.map((movie, index) => {
            return (
                <li key={index}>
                    <h1><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h1>
                </li>
            )
        })

    }

    render() {

        if (this.props.movies !== []) {
            return (
                <div>
                    <Link to="/">back</Link>
                    <ul>

                        {this.renderMovies()}
                    </ul>

                </div>
            )
        } else {
            return null;
        }
    }
}





const mapStateToProps = state => {
    return { movies: state.movies, search: state.search }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);