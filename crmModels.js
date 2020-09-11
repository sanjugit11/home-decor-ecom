const mongoose = require('mongoose');
var schema = mongoose.Schema; //everything in mongoose is schema

const validator = require('validator');

const blogSchema = new schema({
	name: {
		type: String,
		// required:true,
		// minlength:4,
		// maxlength:150
	},
	  email: {
        type: String,
        // unique: true,     //only on email is approved
        // required:true,
        // lowercase: true,
        // validate(value){
        // 	if(!validator.isEmail(value)){
        //       throw new Error('Email is  not valid') ;
        // 	}
        // }  
	},
	 contact:{
	  	type : Number,
	  	// required: true,
	  	// minlength: 10,
	  	// trim:true
	  	// validate(value){
	  	// 	if(value.toLowerCase().includes('password'))
	  	// 	{
	  	// 		throw new Error('you can not put password as password')
	  	// 	}
	  	// }
	},
    
	 comment:{
		type: String,
		
		trim: true   
		// validate(value){
		// 	if(value < 0 ){
		// 		throw new Error ('age should be positive')
		// 	} 
		// }

	}
	
},   
	 {
 		timestamps:true         //tell us about the update and insert time
}); 

module.exports = blogSchema;