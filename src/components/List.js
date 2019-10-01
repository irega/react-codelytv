import React, { Component } from 'react';
import { getVideos } from '../api';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null,
            error: null
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const videos = await getVideos();
            this.setState({ videos, isLoading: false });
        } catch (error) {
            this.setState({ error, isLoading: false });
        }
        return true;
    }
    render() {
        const { videos, isLoading, error } = this.state;
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
                        videos && videos.map((video, i) => {
                            return (<Item key={i} data={video} />)
                        })
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>);
    }
}

export default List;