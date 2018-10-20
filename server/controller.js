function getHouses(req, res){
    const db = req.app.get('db')
    db.get_houses().then(response => res.status(200).send(response))
    .catch(err => console.log('something went wrong', err))
  }

module.exports ={
    getHouses
}