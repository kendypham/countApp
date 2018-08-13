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

    count : async function(req, res, next) {
        const data = await CountView.create().fetch();
        try{
            if(!data){
                throw new Error('Could not create count view object');
            }
            return res.view('count',{
                data: data.id
            });
        } catch(err){
            console.error(err)
            return res.status(500) 
        }
        
    },
       
};

