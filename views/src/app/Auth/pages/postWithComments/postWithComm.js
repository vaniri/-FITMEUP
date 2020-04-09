import React from 'react';
import CommentsContainer from '../../components/comments/comments'
import PostContainer from '../../components/post/post'
import { Container } from 'react-bootstrap';


const PostWithComments = ({ postItem }) => {
    return (

        <Container fluid="lr">
            <PostContainer
                reqUrl={`http://localhost:3001/api/posts/byid/${postItem}`}
                reqType="single"
            />
            <CommentsContainer postItem={postItem} />
        </Container>
    )
}

export default PostWithComments;