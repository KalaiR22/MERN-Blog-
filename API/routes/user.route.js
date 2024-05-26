import express from "express";
import { deleteUser, getUsers, signout, test} from "../controllers/user.controller.js";
import { verifyToken } from "../Utils/verifyUser.js";


const router = express.Router();

router.get('/test', test);
router.post('/signout', signout);
router.get('/getusers',verifyToken, getUsers);
router.delete('/delete/:userId', verifyToken,deleteUser)

export default router;
