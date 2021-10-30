import { Flight } from '../models/flight.js'

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight"
  })
}

function create(req, res){
  Flight.create(req.body, function(error, flight){
    res.redirect("/flights")
  })
}

function index(req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      flights,
      error,
      title: "All Flights"
    })
  })
}

function show(req, res){
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: `Flight Details`, 
      flight,
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(error, flight){
    res.redirect("/flights")
  })
}


export {
  newFlight as new,
  index,
  create,
  show,
  deleteFlight as delete,
}