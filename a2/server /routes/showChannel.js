module.exports = function(db, app) {
  // This route will show chaneel 
  app.get('/api/showChannel', function(req, res) {
    const collection = db.collection('groups')
    collection.find({}).toArray((err, data) => {
      res.send(data)
    })
  })
}
