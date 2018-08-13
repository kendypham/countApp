module.exports = {
    friendlyName : 'Sum id',
    inputs : {
        counting : {
            type : 'number',
            autoIncrement : true
        }
    } ,

    fn : async function SumID(inputs, exits) {
        var total =await CountView.count({counting : 0});
        
        return exits.success(total);
    }
}