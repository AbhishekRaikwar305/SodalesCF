const cds = require('@sap/cds');
module.exports = cds.service.impl(function()
{
    this.on("insertIncident", async(req)=> {
        try{
            let result, returnobj;

            payload = req.data;
            oInput = JSON.parse(payload.asdfghjklmnbvcx);

            const aEmployee = oInput.Employees;
            tx = cds.transaction(req);

            for (let i = 0; i < aEmployee.length; i++){
                result = await tx.run(`CALL "CreateIncident"(?,?,?)`, [aEmployee[i].NAME, aEmployee[i].CITY]);
                console.log(result);
            }

            returnobj = {
                "Success" : "Employee is added Successfully."
            };

            return JSON.stringify(returnobj);     // return value in form of String
            // return returnobj;     // return value in form of Object
        }

        catch(error){
            if(tx){
                // await tx.rollback();
            }

            return req.error({
                code : 500,
                message : error.toString()
            });
        }
    });
});