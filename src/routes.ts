import express from "express";
import { userRouter } from "./modules/user/user.route";

export const routes = [
  {
    path: "",
    handler: express.Router().get('', (req, res) => {
      res.sendFile(__dirname + '/assets/public/index.html');
    })
  }, {
    path: "/api/users",
    handler: userRouter
  }
];
