import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMovie } from "../Actions";
import { Link } from "react-router-dom";

class Movie extends Component {

    async componentDidMount() {

        await this.props.fetchMovie(this.props.match.params.id);
    }

    render() {

        let movie = this.props.movie;
        if (movie !== null) {

            if (movie.poster_path === null) {
                movie.poster_path = "https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png";
            } else {
                movie.poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            }

            return (
                <div className="col-10 row center">

                    <div className="col-6"> <Link to={`/movies/${this.props.search}`}>back</Link>

                        <h1>{movie.title}</h1>
                        <h2>{movie.tagline}</h2>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="col-6">
                        <img src={movie.poster_path} alt={movie.title} />
                    </div>

                </div>
            )

        } else {
            return null;
        }
    }

}

const mapStateToProps = (state) => {
    return ({ movie: state.movie, search: state.search })
}

export default connect(mapStateToProps, { fetchMovie })(Movie);