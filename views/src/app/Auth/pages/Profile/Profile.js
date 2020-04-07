import React, { Component } from 'react';
import axios from 'axios';
import "./Profile.css";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    getUserData = async () => {
        const res = await axios.get(`http://localhost:3001/api/users/${localStorage.userId}`);
        if (res.status === 200) {
            this.setState(res.data.user);
        }
        else if (res.status === 404) {
            alert("No user found");
        } else {
            console.log("FAIL get user data:", res.status);
        }
    }

    getUserPosts = async () => {
        const res = await axios.get(`http://localhost:3001/api/posts/byuser/${localStorage.userId}`);
        if (res.status === 200) {
            this.setState({ posts: res.data.posts});
        }
        else if (res.status === 404) {
            alert("No user found");
        } else {
            console.log("FAIL get user data:", res.status);
        }
    }

    componentDidMount() {
        this.getUserData();
        this.getUserPosts();
    }

    render() {
        console.log(this.state.posts);
        return (
            <div>
                <div className="user-container">
                    <div className="user-img">
                        <img className="user-img" alt="user avatar" src={this.state.image || "https://www.pepper.ru/assets/img/profile-placeholder_f56af.png"} />
                    </div>
                    <div className="user-info">
                        <h3>User Info</h3>
                        <h5>Name: {this.state.username}</h5>
                        <hr />
                        <h5>E-mail: {this.state.email}</h5>
                    </div>
                </div>
                <div className="user-posts">
                    <h4>Latest Posts:</h4>
                    {this.state.posts.map(post => (
                        <div>
                        <p>{post.title}</p>
                        <div className="content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Profile;