import React from 'react';

class FilmDeSaisie  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitFrom = this.submitFrom.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitFrom(e){
        e.preventDefault();
        const config ={
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(this.state),
        };
        fetch("", config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                alert(res.error);
            }else {
                alert(`Film ${res}!`);
            }
        }).catch(e => {
            console.error(e);
            alert('Erreur lors de l\'ajout d\'un Film');
        });
    }
    render(){
        return(
            <div className="FormEmployee">
                <h1>Film</h1>
                <form onSubmit={this.submitFrom}>
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="name">Nom du film:</label>
                        <input
                         type="text"
                         id="name"
                         name="name"
                         onChange={this.onChange}
                         value={this.state.name}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">URL:</label>
                        <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                        /> 
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Commentaire:</label>
                        <textarea
                        type="text"
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                        />
                    </div>
                    <hr/>
                    <div className="form-data">
                        <input type="submit" value="Envoyer"/>
                    </div>
                </fieldset>

                </form>
            </div>
        );
    }
};
export default FilmDeSaisie;
