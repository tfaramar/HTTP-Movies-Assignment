import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';

const initialMovie = {
    id: null,
    title: '',
    director: '',
    metascore: null,
    stars: []
};

const UpdateForm = props => {
    const [movie, setMovie] = useState(initialMovie);
    
    // useEffect(() => {
    //     const id = props.match.params.id;
        
    // }, [props.match.params.id])

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
            .put
    }

    return (
        <div>
            <h2>Update Movie</h2>
            <form>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    // value={}
                />
                <label>Director</label>
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    // value={}
                />
                <label>Metascore</label>
                <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    // value={}
                />
                <label>Stars</label>
                
                <input
                    type="text"
                    name="stars"
                    onChange={changeHandler}
                    // value={}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateForm;