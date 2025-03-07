const { Payment } = require("../models");
//add payment.
async function addPayment(payment) {

    try {
        const newPayment = await Payment.create(payment);
      
        

        return {
            error: false,
            status: 200,
            payload: newPayment
        };
        }
        
        
    catch (error) {
        console.error('Error Creating payment Service : ',error);
        throw error;
        
    }
}

//All payment list.
async function getAllPayment(){
    try {
        const listOfPayment = await Payment.findAll({});

        if(!listOfPayment) {
            return {
                error: true,
                status: 404,
                payload: "No product data found."
            }
        }

        const allPaymentObj = listOfPayment.map((payment, index) => {
            
           
            return {
                id: payment.id,
                address: payment.address,
                paymentMode: payment.paymentMode
                
                }
        })
        return {
            error: false,
            status: 200,
            payload: allPaymentObj
        };
    } catch (error) {
        console.log(error)
        throw error;
    }
}

//Get payment By ID
async function getPaymentById(id) {
    try {
        const payment = await Payment.findByPk(id);

        

        const response = {
            id: payment.id ,
            address: payment.address,
            paymentMode: payment.paymentMode
            
        }

        return {
            error: false,
            status: 200,
            payload: response
        };

    } catch (error) {
        throw error;
    }
}






module.exports = {
    addPayment,
    getAllPayment,
    getPaymentById






}