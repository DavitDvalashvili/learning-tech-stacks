import  bcrypt from 'bcrypt';
import  express, { request, response } from 'express';
const usersRouter = express.Router();
import User from '../Models/User.js';
import * as logger from "../Utils/logger.js"

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()
  logger.info("save user in  mongo Db", savedUser)

  response.status(201).json(savedUser)
})

usersRouter.get('/', async(request, response) => {
    response.send(await User.find({}))
})

export default usersRouter;