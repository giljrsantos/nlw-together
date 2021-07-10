import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComlimentsController = new ListUserReceiveComplimentsController();
const listUserSendComlimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();


router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle); // Rota Inclusão nome da Tag
router.post('/users', createUserController.handle); //Rota Inclusão nome do Funcionário
router.post('/login', authenticateUserController.handle); // Rota para Gerar o Token
router.post('/compliments', ensureAuthenticated, createComplimentController.handle); // Rota para incluir a mensagem de complemento
router.get('/users/compliments/received', ensureAuthenticated, listUserReceiveComlimentsController.handle); //Lista todos os elogios recebidos
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComlimentsController.handle); //Lista todos os elogios enviado
router.get('/tags', ensureAuthenticated, listTagsController.handle); // Rota para listar as TAGS
router.get('/users', ensureAuthenticated, listUsersController.handle); // Rota para Listar todos usuarios

export { router };