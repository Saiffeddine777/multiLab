  import nodemailer from "nodemailer"
  const transport = {
      host:"smtp.gmail.com",
      prot : "465",
      secure:true,
      auth:{
          user:"ttestingtesting45@gmail.com",
          pass:"uctzdzadxzqevrlw"
      },
        tls:{
          rejectUnauthorized: false
        }
  }
  let transporter = nodemailer.createTransport(transport)

  export const sendReviewEmail =  function (email:string){
        const mailOptions ={
          from:"ttestingtesting45@gmail.com",
          to:email,
          subject:"Review Form",
          text :"Hello  /n You can click this Link to make a review for your service"
        }

        console.log("mailOptions.to",mailOptions.to)

        return new Promise((resolve,reject)=> {
          transporter.sendMail(mailOptions,(error,info)=>{
          if(error){
            reject(error)
          }
          else{
            resolve(info.response)
          }
        })})
  } 