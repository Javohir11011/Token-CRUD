import { User } from "../models/index.js";
export const getAllAuthors = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;
        const authors = await User.find().skip(skip).limit(limit);
        res.send({
            message: "Success",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};

export const createAuthors = async (req, res, next)=>{
    try {
        const body = req.body
        if(!body){
            res.send("Bodyda malumot kiriting...")
        }
        const authors = await User.create(body)
        res.status(200).send({
            message:"Created"
        })


    } catch (error) {
        next(error)
    }
}
export const updateAuthor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const authors = await User.findByIdAndUpdate(id, req.body);
        res.send({
            message: "Updated",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};
export const deleteAuthor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const authors = await User.findByIdAndDelete(id);
        res.send({
            message: "Deleted",
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};
