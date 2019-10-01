import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import { getCharacters } from '../api';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            characters: null,
            error: null
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const characters = await getCharacters();
            this.setState({ characters, isLoading: false });
        } catch (error) {
            this.setState({ error, isLoading: false });
        }
        return true;
    }
    render() {
        const { characters, isLoading, error } = this.state;
        if (isLoading) {
            return <Loading message="Cargando ..." />;
        }
        if (error) {
            return <p className="error" >{error.message}</p>;
        }
        return (<React.Fragment>
            <Header />
            <div className="container">
                <div className="grid-container">
                    {
                        characters && characters.results && characters.results.map((character, i) => {
                            return (<Item key={i} data={character} />)
                        })
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>);
    }
}

export default List;