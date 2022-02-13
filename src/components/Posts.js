import React from 'react';

export default class Post extends React.Component {

    state = {
        posts: []
    }
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        //console.log(data);
        this.setState({ posts: data });
        console.log(this.state.posts)
    }

    render() {
        return (<div>
            <h1>Posts</h1>
            {
                this.state.posts.map(post => {
                    return <div key={post.id}>
                        <h2>{post.id} - {post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                })
            }
        </div>)
    }

}