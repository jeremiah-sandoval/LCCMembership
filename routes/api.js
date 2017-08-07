const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// Get list of member from the db
router.get('/members', function(req, res, next){
  Member.find({}).then(function(members){
    res.send(members);
  });
});

// Add new member to the db
router.post('/members', function(req, res, next){
  Member.create(req.body).then(function(member){
    res.send(member);
  }).catch(next);
});

// Update member in the db
router.put('/members/:id', function(req, res, next){
  Member.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Member.findOne({_id: req.params.id}).then(function(member){
      req.send(member);
    });
  }).catch(next);
});

// Delete member from the db
router.delete('/members/:id', function(req, res, next){
  Member.findByIdAndRemove({_id: req.params.id}).then(function(member){
    req.send(member);
  }).catch(next);
});

module.exports = router;
