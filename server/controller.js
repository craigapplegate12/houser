function getHouses(req, res){
    const db = req.app.get('db')
    db.get_houses().then(response => res.status(200).send(response))
    .catch(err => console.log('something went wrong', err))
  }
function addProperty(req, res){
    const {name, address, city, state, zip} = req.body
    console.log( name, address, city, state, zip)
    const db = req.app.get('db')
    db.add_property([name, address, city, state, zip])
    .then(response => res.status(200).send(response))
    .catch(err=> res.status(500).send(err))
}
module.exports ={
    getHouses,
    addProperty
}