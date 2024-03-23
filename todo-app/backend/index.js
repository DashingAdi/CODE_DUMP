const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res,next) {
    const todoBody = req.body;
    const parsedTodoBody = createTodo.safeParse(todoBody);
    if (!parsedTodoBody.success) {
        res.status(411).json({
            msg: "Wrong Inputs",
        })
        return;
    }

    await todo.create({
        title: todoBody.title,
        description: todoBody.description,
        completed: false,
    });

    res.json({
        msg: 'Todo is created',
    })
})

app.get("/todos", async function(req,res) {
    const todos = await todo.find({});
    res.json(
        todos,
    )

})

app.put("/completed", async function(req,res) {
    const updateBody = req.body;
    const parsedUpdateBody = updateTodo.safeParse(updateBody);
    if (!parsedUpdateBody.success) {
        res.status(411).json({
            msg: "Wrong Inputs",
        })
        return;
    }

    await todo.updateOne({
        _id: updateBody.id,
    }, {
        completed: true,
    })
    
    res.json({
        
        msg: "Todo Completed",
    })

})

app.listen(3000);