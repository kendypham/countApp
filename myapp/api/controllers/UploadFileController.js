const path = require('path');
/**
 * UploadFileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    uploadFile : async function(req, res){
        // var  img = req.body.data;
        // console.log(img);
        // var dt = req.param('details');
        // console.log(dt);
        //let data = await Images.create({"image":img , "details" : dt}).fetch();
        var data = req.body.data;
        console.log(req.data);
        console.log("----------------");
        
        
        const uploadPath = path.resolve(process.cwd(), '..','imageData');
        
		await req.file('file').upload({
			// Directory path where you want to save...
			dirname: uploadPath
			
		},function(err, file){
            if(err) return console.error(err);
            console.log(file);     
            console.log(data); 
            //console.log(res.json({'status' : 'Success'}));     
        });        
	}
};

