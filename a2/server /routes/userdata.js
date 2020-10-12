module.exports = function(db, app) {
  //This route will return the user data from an array 
  app.get('/api/userdata', function(req, res) {
    const collection = db.collection('users')
    collection.find({}).toArray((err, data) => {
      res.send(data)
    })
  })
}
