import express from "express";
import * as voyageurController from "../controllers/voyageur_controllers";
const router = express.Router();

router.route("/").get(voyageurController.getAllvoyageurs)
                .post(voyageurController.addvoyageur);
router.route("/:id").get(voyageurController.getVoyageurById)
                    .delete(voyageurController.deleteVoyageurById)
                    .patch(voyageurController.updatevoyageur);

export default router;