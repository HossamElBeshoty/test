var p= function(){

   return new Promise((res,rej)=>{
        try {
           setTimeout(function(){
               res("hossam")
           },300) 
           
        } catch (error) {
            rej(error)
        }
    })
}
//p().then(rse=>{console.log(rse)}).catch(err=>{console.log(err)});
module.exports.test=p();