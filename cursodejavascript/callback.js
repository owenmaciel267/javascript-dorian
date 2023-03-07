//Un callback es una funcion que se ejecuta a travez de otra funcion 
//Los callback no son asincronos 

// const getUser = (id, cb)=>{
//     const user ={
//         name: "Owen",
//         id
//     }
//     if(id==2) cb(`User not exist`)
//     else cb(null,user)
// }

// getUser(1, (err,user)=>{
//     if(err)return console.log(err);
//     console.log(`User name is ${user.name}`);
// })


const users = [
    {
        id:1,
        name:"Owen",
    },{
        id:2,
        name:"Gay"
    },{
        id:3,
        name:"Gabi"
    }
]

const Email =[
    {
        id:1,
        email:"owen267@gamil.com"
    },{
        id:2,
        email:"gay267@gmail.com"
    }
]

const getUser = (id,cb) =>{
    const user = users.find(user=>user.id==id)
    if(!user) cb(`No existe un user con ese id ${id}`)
    else cb(null,user) 
    
}

const getEmail = (user,cb)=>{
    const email = Email.find(email => email.id == user.id)
    if(!email) cb(`${user.name} no tiene email`)
    else cb(null,{
        id: user.id,
        name: user.name,
        email: email.email
    })
} 

getUser(3,(err,user)=>{
    if(err) return console.log(err)

    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
})