const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.post('/', (req, res) => {
    const newCar = req.body;
   db('cars').insert(cars)
    .then((cars) => {
        console.log('New car')
        res.status(201).json(cars)
    })
    .catch(() => {
        res.status(501).json({error: "Post not created, please try again!"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db('cars').remove(id)
        .then((IDdeleted) => {
            if(IDdeleted > 0) {
                res.status(200).json({message: "Car deleted"})
            } else {
                res.status(500).json({error: "Car not Deleted"})
            }
        })
});




module.exports = router;