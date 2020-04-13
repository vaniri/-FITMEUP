import React from "react";
import { FaRegThumbsUp, FaBrain} from 'react-icons/fa';
import axios from 'axios';
import './likes.css';

const LikeButton = ({ postItem }) => {

    let sendReaction = async (type) => {
        try {
            const res = await axios.post('http://localhost:3001/api/likes',
                { type, postItem }, 
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status === 201) {
                console.log("Reaction save successfully");
            } else {
                console.log("FAIL post reaction");
            }
        } catch (err) {
            console.log("FAIL post reaction: ", err);
        }

    }

    return (
        <div>
        <button fas fa-head-side-brain id="like" block size='small' type="submit" onClick={() => sendReaction('like')}>
        <FaRegThumbsUp />
        </button>
        <button id="brain" block size='small' type="submit" onClick={() => sendReaction('useful')}>
        <FaBrain />
        </button>
        </div>
    )
}

export default LikeButton;