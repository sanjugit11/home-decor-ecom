const mongoose = require('mongoose')
const express = require ('express')
const Blogschema = require('./crmModels.js');

const router = new express.Router()

// const blogModel = mongoose.model('Order',Blogschema); 

// //for first view always
// router.get('/',function(req,res){
// 	res.sendfile('index.html');
// })

// //input the data for enquiry
// router.post('/pay',async (req,res) => {
// 	const blog = new blogModel (req.body)

// 	try{
// 		const info = await blog.save()
// 		res.status(201).sendfile('index.html')

// 	}catch(e){
//         res.status(400).send(e)
// 	}
	
// })

module.exports= router ;