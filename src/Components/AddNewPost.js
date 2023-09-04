import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from '../app/postSlice';
import { selectAllUsers } from '../app/userSlice';

export default function AddNewPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    //to get value of selected author among the options
    const [userId, setUserId] = useState();
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    //just to clear form input fields after submitting
    const clearForm = useRef();

    //submit button appears only after no input is null
    const onSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';


    function submitHandler(e) {
        e.preventDefault();
        if (onSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap()
                setTitle('');
                setContent('');
                setUserId('');
            } catch (error) {

            }
        }
    }
    const usersOption = users.map((user) => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

    return (
        <div className="inputFormDiv">
            <h2>Input Form</h2>
            <form onSubmit={submitHandler} ref={clearForm}>
                <label>Add Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" /><br />
                <label>Author: </label>
                <select value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOption}
                </select><br />
                <label>Add Content</label>
                <input value={content} onChange={(e) => setContent(e.target.value)} type="text" /><br />
                <button type="submit" disabled={!onSave}>Submit</button>
            </form>
        </div>
    )
}
