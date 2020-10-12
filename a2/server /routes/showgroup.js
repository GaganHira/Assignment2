module.exports = function(db, app) { // Route and method to show group from an array
  app.get('/api/showgroup', function(req, res) {
    const collection = db.collection('groups')
    collection.find({}).toArray((err, data) => {
      res.send(data)
    })
  })
}
