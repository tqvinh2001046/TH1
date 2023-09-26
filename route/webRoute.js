
import express from "express";
const router = express.Router();
import getHomePage from "../controllers/HomeController";
import getAboutPage from "../controllers/AboutController";
import {
  createUser,
  getListUser,
  login,
  detailUser,
} from "../controllers/UserController";

const initWebRoute = (app) => {
  router.get("/", getHomePage);
  router.get("/about", getAboutPage);
  router.get("/create-new-user", createUser);
  router.get("/login", login);
  router.get("/list-user/:page?", getListUser);
  router.get("/detail-user/:username?", detailUser);
  router.get("*", (req, res) => {
    res.send("Lỗi 404, không tìm thấy trang");
  });
  return app.use("/", router);
};

export default initWebRoute;