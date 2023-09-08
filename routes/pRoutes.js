const express = require('express');
const router = express.Router();
const pf = require('../models/projects');


router.get('/movies', async (req, res) => {
  try {
    const pro = await pf.find();
    res.json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/movie/:id', async (req, res) => {
  try {
    const pro = await pf.findById(req.params.id);
    res.json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





router.post('/movie/data', async (req, res) => {
  try {
    const pro = await pf.create(req.body);
    res.status(201).json(pro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
});

router.delete('/movie/delete/:id',async(req,res)=>{
  const del = {"_id":req.params.id}

  const ss= await pf.findOneAndRemove(del)
  res.send(`del success ${ss}`)})


router.put('/movie/update/:id', async (req, res) => {
  const put = {"_id":req.params.id}
  console.log(put)
  try {
    const newpro = await pf.findOneAndUpdate(put, req.body, { new: true });
    res.json(newpro);
    console.log(newpro)
  } catch (error) {
    res.status(404).json({ error: 'pro not found' });
  }
});


module.exports = router;
