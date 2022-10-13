import { Schema, model, models} from "mongoose"

const hospitalSchema = new Schema ({
    firstName:{
        type: String,
        required: [true, "First name is required"],
    },

    lastName:{
        type:String,
        required: [true, "Last name is required"],
    },

    sex:{
        type: String,
        required: true, 

    },
    patientId:{
        type: String,
        required: true, 

    },
    age:{
        type: String,
        required: true, 
    },
    dateOfBirth:{
        type: String,
        required: true, 
    },
    contact:{
        type: String,
        required: true, 
    },

    address:{
        type: String,
        required: true,
    },
    bloodType:{
        type: String,
        required: true,
    },

    history:{
        type: String,
        required: true,
    }
    
},
{
    timestamps: true,
})
const Hospital = models.Hospital || model("Hospital", hospitalSchema);
export default Hospital;