import React from 'react';
import axios from 'axios';
import { FaUserPlus } from 'react-icons/fa';
import { apiUrl } from '../../../utils';
import './subsButton.css';

const SubsButton = ({ tgtUser }) => {

    let subscribe = async () => {
        try {
            const res = await axios.post(apiUrl('/api/subs'),
                { tgtUser, srcUser: localStorage.userId },
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
                if (res.status === 201) {
                    console.log("you have successfully subscribed");
                } else {
                    console.log("FAIL to subscribe");
                }
        } catch (err) {
            console.log("FAIL to subscribe: ", err);
        }
    }

    return (
        <div>
            <button id="subs" block size="small" type="submit" onClick={subscribe}>
            <FaUserPlus />
            </button>
        </div>
    )
}

export default SubsButton;