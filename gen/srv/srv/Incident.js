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
                result = await tx.run(`CALL CreateIncident (?,?,?)`, [aEmployee[i].ID, aEmployee[i].NAME, aEmployee[i].CITY]);
                console.log(result);
            }

            returnobj = {
                "Success" : "Employee is added Successfully."
            };

            return JSON.stringify(returnobj);
        }

        catch(error){
            if(tx){
                await this.tx.rollback();
            }

            return req.error({
                code : 500,
                message : error.toString()
            });
        }
    });
});