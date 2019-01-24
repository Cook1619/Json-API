import React, { Component } from 'react';

class Json extends Component {

    fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    componentDidMount() {
        this.fetchPosts();
    }
    render() {
        return (
            <div className="App">
                test
            </div>
        );
    }
}

export default Json;