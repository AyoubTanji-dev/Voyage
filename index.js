import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import destinationRouter from "./routes/destination_routes.js"
import reservationRouter from "./routes/reservation_routes.js"
import voyageurRouter from "./routes/voyageur_routes.js"
const app=express();
dotenv.config();
app.use(express.json());
app.use("/api/destinations",destinationRouter);
app.use("/api/reservations",reservationRouter);
app.use("/api/voyageurs",voyageurRouter);

app.get("/",(req,res)=>{
    res.send("<h1> Home Page </h1>");
});
mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("Connected to MongoDB");

            app.listen(process.env.PORT,()=>{
                console.log('Server is running on port ' + process.env.PORT);
            });
        })
        .catch((err)=>{
            console.log("Error connecting to MongoDB:",err);
        });
        