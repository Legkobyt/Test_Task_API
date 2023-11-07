// TODO
// 
// поиск по айди и имени юзера (no ready endpoints)
// поиск по тексту в посте
import express from 'express';
import userController from './UserController.mjs';
import postController from './PostController.mjs';

const app = express();

app.use('/users', userController);
app.use('/posts', postController);
const port = 3000;
app.listen(port, () => {
  console.log(`Port server: ${port}`);
});
