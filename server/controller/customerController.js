const CustomerDB = require('./model/customerModel')

const createMember = async (req, res) =>{
    try {
        const memberData = new CustomerDB(req.body);
        if(!memberData){
            return res.status(404).json({msg: "Customer Data not found."});
        }

        await memberData.save();
        return res.status(200).json({msg: "Customer added successfully."});

    } catch (error){
        console.log(error);
    }
}

const getAllMembers = async (req, res) =>{
    try {
        const memberData = await CustomerDB.find({});
        if(!memberData){
            return res.status(404).json({msg: "No records found."});
        }
        res.status(200).json(memberData);

    } catch (error) {
     console.log(error);   
    }
}

module.exports = {createMember, getAllMembers};