import db from "../../../lib/dbConnect";
import hospitals from "../../../models/hospitals";


export async function handler(req, res) {
    if (req.method === "GET") {
        const {patientId} = req.params;

        console.log(patientId)

        await db.connect();
        const patient = await hospitals.findOne({patientId});
        db.disconnect();

        if (!patient) {
            res.status(404).json({message: "Patient Not Found"});
            return;
        }
        res.status(200).json({patient});
    }
}