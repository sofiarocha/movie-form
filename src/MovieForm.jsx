import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            poster: "",
            comment: ""
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    submitForm = (event) => {
        event.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Added movie with the ID ${res}!`);
            }
            }).catch(e => {
            console.error(e);
            alert('Error adding movie');
        });
    }

    render() {
        return (
            <div className="MovieForm">
                <h1>Your favourite movie</h1>

                <form onSubmit={this.submitForm} >
                    <div className="form-data">
                        <label htmlFor="name">Movie Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Poster Movie Url</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            value={this.state.poster}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="commment">Why do you like it?</label>
                        <textarea className="form-control" id="comment" name="comment" rows="3" onChange={this.handleChange} value={this.state.comment}/>
                    </div>
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                </form>
                </div>
        );
    }
}

export default MovieForm;