
const userModel = require('../model/user.model')
const csv = require('csvtojson')

class userController{
    async docUploadForm (req,res){
        try{
            res.render('add',({
                title:"show document form"
            }))

        }catch(err){
            throw err
        }
       

    }

    async insertForm(req,res){
        try{
            let userData= []
            csv().fromFile(req.file.path).then(async(res)=>{
                for(let f = 0; f < res.length; f++){
                    userData.push({
                        firstname:res[f].firstname,
                        lastname:res[f].lastname
                    })

                }
              const saved_data=  await userModel.insertMany(userData)
              console.log(saved_data);
             
            })
            

        }catch(err){
            throw err
        }


    }

    async listData(req,res){
        try{
            const all_data=  await userModel.find()
            res.render('list',({
                title:"listing data",
                data: all_data
            }))


        }catch(err){
            throw err
        }

    }

}

module.exports = new userController()