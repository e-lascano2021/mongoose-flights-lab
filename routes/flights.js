import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// localhost:3000/flights - GET
router.get('/', flightsCtrl.index)
// localhost:3000/flights/new - GET
router.get('/new', flightsCtrl.new)
// localhost:3000/flights/:id - GET
router.get('/:id', flightsCtrl.show)
// localhost:3000/flights/:id/tickets/new - GET
// router.get('/:id/tickets/new', flightsCtrl.newTicket)

// localhost:3000/flights - POST
router.post('/', flightsCtrl.create)



// localhost:3000/flights/:id - DELETE
router.delete('/:id', flightsCtrl.delete)


export {
  router
}
