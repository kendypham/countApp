/**
 * ImagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    imgData : async function(req, res) {
        var  img = req.param('image');
        var dt = req.param('details');
        let data = await Images.create({"image":img , "details" : dt}).fetch();
       

        
        try{
            if(!data){
                throw new Error('Could not create count view object');
            }
            return res.json({
                data
            });
        } catch(err){
            console.error(err)
            return res.status(500) 
        }
        
    },

};

