import express, { Request, Response } from "express";
import Post from "./post.model";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.post("/api/post/create", async (req: Request, res: Response) => {
    try {
        const { title, content, author } = req.body;
        const post = new Post({ title, content, author });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create post" });
    }
});

app.get("/api/posts", async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

export default app;
