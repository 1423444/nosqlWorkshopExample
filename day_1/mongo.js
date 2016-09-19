var url = 'mongodb://localhost:27017/katze';
 	var mongo = require('mongodb').MongoClient
 		mongo.connect(url, function(err, db) {
 			console.log("Connected correctly to server");
   		// db gives access to the database

	 		var coll = db.collection('katzen');
 		
	 		coll.find({name: "morle" }).toArray(function(err, documents){
	 			console.log(documents)
	 			db.close();
	 		});
 		})


/*var url = 'mongodb://localhost:27017/mongoTest';
 	var mongo = require('mongodb').MongoClient
 		mongo.connect(url, function(err, db) {
 			console.log("Connected correctly to server");
 			var id;
 			var coll = db.collection('parrots');*/
   		// db gives access to the database



   		/*coll.aggregate([
   			{$match: {status: "A"}},
   			{$group: {
   				_id: 'sum',
   				sum: {
   					$sum: '$value'
   				}
   			}}

   			]).toArray(function(err, data){
   				//errorHandling
   				console.log(data);
   				db.close();
   			})*/


		/*coll.find({name: 'Sascha'}).toArray(function(err, documents){
			id = documents[0]._id;
			coll.update({
		     _id: id
		   }, {
		     $set: {
		       _id: "1"
		     }
		   })*/
			
		//});
	 		/*coll.insert({name:"jascha"},
	 			function(err, data){
	 				//handle error
	 			});*/
 		//})



 		