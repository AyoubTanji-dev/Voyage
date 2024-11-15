
import express from "express";
import * as destinationController from "../controllers/destination_controllers.js";
const router = express.Router();

router.route("/").get(destinationController.getAllDestinations)
                 .post(destinationController.addDestination);
router.route("/:id").get(destinationController.getDestinationById)
                    .delete(destinationController.deleteDestinationById)
                    .patch(destinationController.updateDestination);
export default router;
                  
