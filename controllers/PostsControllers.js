import PostModel from "../moduls/Posts.js"

export const getAll = async (req, res) => {
    try {
        // const posts = await PostModel.find().populate("user").exec()
        const posts = await PostModel.find()
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "can not create post"
        })
    }
}