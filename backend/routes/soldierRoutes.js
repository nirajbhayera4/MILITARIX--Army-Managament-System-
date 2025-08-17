const express = require('express');

const router =express.Router();
const soldier =require('../models/soldier');

//creates new soldier
router.post('/',async (req, res) => {
    try{
        const soldier =new soldier(req.body);
        await soldier.save();
        res.json(soldier);
    }catch(err)
{
    res.status(500).json({message: err.message});
}});

// getting all the soliders
router.get('/',async (req, res) => {
    try{
        const soldiers = await soldier.find();
        res.json(soldiers);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }});
    module.exports = router;