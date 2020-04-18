import React from 'react';
import CommentsContainer from '../../components/comments/comments';
import PostContainer from '../../components/post/post';
import { apiUrl } from '../../../utils';
import { Container } from 'react-bootstrap';

const PostWithComments = ({ postItem }) => {
    return (

        <Container fluid="lr">
            <PostContainer
                reqUrl={apiUrl(`/api/posts/byid/${postItem}`)}
            />
            <CommentsContainer postItem={postItem} />
        </Container>
    )
}

export default PostWithComments;