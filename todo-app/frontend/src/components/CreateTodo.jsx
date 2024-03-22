import { useState } from "react";

export function CreateTodo() {

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <>
        <input style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="Title" onChange={(e) => {
            setTitle(e.target.value);
        }}></input> <br/>

        <input style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="Description" onChange={(e) => {
            setDescription(e.target.value);
        }}></input> <br/>

        <button onClick={() => {
            const res = fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(() => {
                res.json();
                alert("Todo added")
            })
        }}>Add a todo</button>
    </>
}