import Hospital from "../../../models/hospitals";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {

        if (req.method === "GET") {
            await db.connect();

            const hospitals = await Hospital.find({
            })

            await db.disconnect();

            res.status(200).json({hospitals});
        } else if (req.method === "POST") {
            await db.connect();

            console.log(req.body)

            const hospital = await Hospital.create({...req.body});

            await db.disconnect();

            res.status(201).json({hospital});
        } else {
            res.status(405).json({error: "Only POST and GET methods are allowed"})
        }
    }