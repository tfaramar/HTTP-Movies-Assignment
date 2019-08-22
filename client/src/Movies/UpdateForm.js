import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []
};

const UpdateForm = props => {
    const [movie, setMovie] = useState(initialMovie);
    useEffect(() => {
        const id = props.match.params.id;
        const movieInList = props.movies.find(movie => `${movie.id}` === id);
        if (movieInList) setMovie(movieInList);
    }, [props.movies, props.match.params.id]);

    const changeHandler = event => {
        event.persist();
        let value = event.target.value;
        if (event.target === 'metascore'){
            value = parseInt(value, 10);
        }

        setMovie({
            ...movie,
            [event.target.name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                console.log(res);
                setMovie(initialMovie);
                props.updateMovies(res.data);
                props.history.push('/movies')

            })
            .catch(error => console.log(error.response));
    };

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    value={movie.title}
                />
                <label>Director</label>
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    value={movie.director}
                />
                <label>Metascore</label>
                <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    value={movie.metascore}
                />
                <label>Stars</label>
                
                {/* <input
                    type="text"
                    name="stars"
                    onChange={changeHandler}
                /> */}
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateForm;