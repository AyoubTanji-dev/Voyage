
import express from "express";
import * as reservationController from "../controllers/reservation_controllers.js";
const router=express.Router();

router.route("/").get(reservationController.getAllreservations)
                .post(reservationController.addreservation);
router.route("/:id").get(reservationController.getReservationById)
                    .delete(reservationController.deleteReservationById)
                    .patch(reservationController.updateReservation);
export default router;