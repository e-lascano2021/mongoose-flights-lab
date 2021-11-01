import { Flight } from '../models/flight.js'

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight"
  })
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }  
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


function createTicket(req, res){
  //console.log("work work work work work")
  Flight.findById(req.params.id, function(error, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  index,
  create,
  show,
  deleteFlight as delete,
  createTicket,
}