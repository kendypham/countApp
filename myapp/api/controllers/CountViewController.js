/**
 * CountViewController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    'new' : function(req, res){
        res.view();
    },
    
    render : async function(req, res, next) {
       
        let data = await sails.helpers.sum();
        console.log(data);
        try{
            if(data == 0){
                return res.view('count',{
                    data
                 });
            }
            if(!data){
                throw new Error('Could not sum object');
            }
            return res.view('count',{
               data
            });
        } catch(err){
            console.error(err)
            return res.status(500) 
        }
    },

    load : async function(req, res, next) {
       
        let data = await sails.helpers.sum();
        console.log(data);
        try{
            if(data == 0){
                return res.ok({
                    data : 0
                 });
            }
            if(!data){
                throw new Error('Could not sum object');
            }
            return res.ok({
                data
             });
        } catch(err){
            console.error(err)
            return res.status(500) 
        }
    },
    
    count : async function(req, res) {
        await CountView.create().fetch();
       

        let data = await sails.helpers.sum();
        try{
            if(!data){
                throw new Error('Could not create count view object');
            }
            return res.ok({
                data
            });
        } catch(err){
            console.error(err)
            return res.status(500) 
        }
        
    },

    reset : async function(req, res){
        await CountView.destroy({}).fetch();
        
        let data = await sails.helpers.sum();
        try{
            if(data == 0){
                return res.ok({
                    data : 0
                 });
            }
            if(!data){
                throw new Error('Could not sum object');
            }
           
        } catch(err){
            console.error(err)
            return res.status(500) 
        }
    }
       
};

