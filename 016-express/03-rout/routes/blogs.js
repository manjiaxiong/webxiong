const express = require('express');
const router =express.Router();


router.get('/', (req, res) => res.send('get response '))
router.post('/', (req, res) => res.send('post response '));
router.put('/', (req, res) => res.send('put response '));
router.delete('/', (req, res) => res.send('delete response '));





module.exports=router;