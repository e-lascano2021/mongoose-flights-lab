import { Flight } from '../models/flight.js'

function newFlight(req, res){
  res.render('flights/new')
}

function create(req, res){
  Flight.create(req.body, function(error, flight){
    res.redirect("/flights/new")
  })
}

function index(req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      flights: flights,
      error: error
    })
  })
}

export {
  newFlight as new,
  index,
  create,
}