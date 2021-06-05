import React from 'react';
import { Fragment, useState } from 'react';
const InputTodos = () => {

    const [description, setDescription] = useState("");

    const OnSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch("http://localhost:5000/todos", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = '/';
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Todo List</h1>
            <form className="mt-5" onSubmit={OnSubmitForm}>
                <div className="row gx-1 d-flex">
                    <div className="col-md-11">
                        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default InputTodos;