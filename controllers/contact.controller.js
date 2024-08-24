let contactModel = require('../models/contact.model')

const addContact = (req, res) => {
    console.log(req.body);
    let form = new contactModel(req.body)
    form.save().then(()=> {
        console.log('Contact saved');
        res.status(200).send({ message: 'User Saved' });
    }).catch(err => {
        console.log('Failed to save');
        console.log(err);
        res.status(500).send({ message: 'error saving contact' });

    })
}

const displayContact = (req, res) => {
    contactModel.find()
    .then(allContacts => {
        res.status(200).send({ message: allContacts });
    }).catch(err => {
        console.log(err);
    })
}

const displayacontact = (req, res) => {
    const contactId = req.body.id
    console.log(req.body.id);
    contactModel.findById(contactId) 
    .then(contact => {
        if(!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        } 

        console.log('conatct found:', contact);
        res.status(200).send({ message: contact });
        
    }).catch(err => {
        console.log("err finding contact", err);
        res.status(500).json({ message: 'Server error' });
        
    })
}

module.exports = {addContact, displayContact, displayacontact}