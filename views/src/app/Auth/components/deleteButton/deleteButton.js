import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FaRegTrashAlt } from "react-icons/fa";
import './deleteButton.css';

const DeleteButton = ({ url, component, postAuthorId }) => {

    const history = useHistory();

    let removeContent = async () => {
        try {
            const res = await axios.delete(url,
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status === 204) {
                console.log(`${component} delete succsessfuly`);
                history.push('/');
            } else {
                console.log(`FAIL delete ${component}`);
            }
        } catch (err) {
            console.log(`FAIL delete ${component}: ${err}`);
        }

    }

    return (
        <div id="animation-delete">
            {localStorage.userId === postAuthorId ?
                (<button id="delete-bitton" type="submit" onClick={removeContent}>
                    <FaRegTrashAlt />
                </button>) : (<div></div>)
            }
        </div>
    )
}

export default DeleteButton;