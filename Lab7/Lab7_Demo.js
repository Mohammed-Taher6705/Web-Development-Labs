const express = require("express");
const app = express();

app.use(express.json());

const posts = []; 

app.get("/posts", (req, res) => {
    res.json(posts);
});


app.post("/posts", (req, res) => {
    const post = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        comments: [] 
    };
    posts.push(post);
    console.log(`Added post: ${JSON.stringify(post)}`);
    res.status(201).json(post);
});


app.put("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);

      const post = posts.find(p => p.id === postId);

        post.title = req.body.title;
        post.content = req.body.content;


    console.log(`Updated post: ${JSON.stringify(post)}`);
    res.json(post);
});


app.delete("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);

     const index = posts.findIndex(p => p.id === postId);

    const deleted = posts.splice(index, 1);
    console.log(`Deleted post: ${JSON.stringify(deleted[0])}`);
    res.send("Post deleted");
});


app.get("/posts/:id/comments", (req, res) => {
    const postId = parseInt(req.params.id);
        const post = posts.find(p => p.id === postId);

    res.json(post.comments);
});

app.post("/posts/:id/comments", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    const comment = {
        id: post.comments.length + 1,
        content: req.body.content
    };
    post.comments.push(comment);

    console.log(`Added comment to post ${postId}: ${JSON.stringify(comment)}`);
    res.status(201).json(comment);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
