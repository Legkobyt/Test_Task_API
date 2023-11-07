
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/:userId(\\d+)', (req, res) => {

    const userId = req.params.userId;
    fetch('https://jsonplaceholder.org/users')
        .then(res => res.json())
        .then(users => {
            res.send(users.filter(data => data.id == userId))
        })

})

router.get('/:firstname', (req, res) => {

    const firstname = req.params.firstname;
    fetch('https://jsonplaceholder.org/users')
        .then(res => res.json())
        .then(users => {
            res.send(users.filter(data => data.firstname === firstname))
        })

})

export default router;