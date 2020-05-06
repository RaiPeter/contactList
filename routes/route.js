const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts')

//retrieve data
router.get('/contacts',(req,res,next)=>{
Contact.find(function(err,contacts){
res.json(contacts);
})    
})

// add data
router.post('/contact',(req,res,next)=>{
let newContact = new Contact({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    phone : req.body.phone
});
newContact.save((err,contact)=>{
if(err){
    res.json({ msg : 'Failed to add Contact'})
}else{
    res.json({msg : 'Contact added successfully'})
}
})
})

//to delete a contact
router.delete(('/contact/:id',(req,res,next)=>{
Contact.remove({_id : req.params.id }, function(err,results){
if(err){
    res.json(err);
}else{
    res.json(results);
}
} )
}))


module.exports = router;