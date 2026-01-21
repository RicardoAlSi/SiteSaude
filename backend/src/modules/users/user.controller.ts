import { Request, Response } from "express";


const users = {

  index: (req: Request, res: Response) => {
    res.send("users index");
  },

}

export default users;