
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/:content', (req, res) => {

    const content = req.params.content;
    fetch('https://jsonplaceholder.org/posts')
        .then(res => res.json())
        .then(users => {
            res.send(users.filter(data => data.content.includes(content)))
        })

})

export default router;