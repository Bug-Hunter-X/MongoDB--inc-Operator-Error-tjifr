```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("6529796658197764297520")},{$inc:{counter:1}},{upsert:true});
//Adding upsert:true to create the field if it doesn't exist
//or you can add a check and use an update operation
db.collection.updateOne({"_id":ObjectId("6529796658197764297520"), counter:{$exists:true}},{$inc:{counter:1}});
```