import React, { useState } from "react";
import {FaRegThumbsUp, FaRegLightbulb } from 'react-icons/fa';
import axios from 'axios';
import './likes.css';

const LikeButton = ({ postItem, likesObj }) => {

    let [ counts, setCounts ] = useState(likesObj);

    let sendReaction = async (type) => {
        try {
            const res = await axios.post('http://localhost:3001/api/likes',
                { type, postItem }, 
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status === 201) {
                console.log("Reaction save successfully");
                let newCounts = {...counts};
                newCounts[type] = (newCounts[type] || 0) + 1;
                setCounts(newCounts);
            } else {
                console.log("FAIL post reaction");
            }
        } catch (err) {
            console.log("FAIL post reaction: ", err);
        }

    }

    return (
        <div id="likes-container">
        <button fas fa-head-side-brain id="like" block size='small' type="submit" onClick={() => sendReaction('like')}>
        <FaRegThumbsUp />
        </button>
        <button id="brain" block size='small' type="submit" onClick={() => sendReaction('useful')}>
        <FaRegLightbulb />
        </button>
        <button className="reaction">{counts.like}</button>
        <button className="reaction">{counts.useful}</button>
        </div>
    )
}

export default LikeButton;