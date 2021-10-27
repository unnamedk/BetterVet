import { Router } from 'express'
import Container from 'typedi'
import UserController from '../controllers/user.controller'

const router = Router()

const userController = Container.get(UserController)

// router.post('/user', userController.createUser)

export default router
