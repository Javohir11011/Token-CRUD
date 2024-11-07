import { Router } from "express";
import {
    getAllAuthors,
    deleteAuthor,
    updateAuthor,
    createAuthors,
} from "../controllers/index.js";
import { checkAdmin, checkSupperAdmin, checkUser } from "../middleware/index.js";




export const authorRoutes = new Router();
authorRoutes.get("/", checkUser, getAllAuthors);
authorRoutes.post("/new", checkAdmin, createAuthors);
authorRoutes.put("/:id",checkAdmin, updateAuthor);
authorRoutes.delete("/del/:id",checkSupperAdmin, deleteAuthor);
