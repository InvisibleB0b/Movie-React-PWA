import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMovies, searchQuery } from "../Actions";
import { Link } from "react-router-dom";

class Search extends Component {

    ChangeSearch(e) {
        this.props.searchQuery(e);
    }
    render() {

        return (
            <div>
                <input type="text" value={this.props.search} onChange={(e) => { this.ChangeSearch(e.target.value) }} />
                <Link to={`movies/${this.props.search}`}>Search</Link>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { movies: state.movies, search: state.search }
}

export default connect(mapStateToProps, { fetchMovies, searchQuery })(Search);