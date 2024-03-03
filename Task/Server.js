const {client} =require('pg')


const client=new Client (
  {
    host:"localhost",
    user:"postgres",
    port:5432,
    database:"postgres",
    password:"90140"
  }
)

client.connect();

client.query('select * from zitharadata', (err,res)=>{
  if(!err){
    console.log(res);

  }
  else{
    console.log(err.message);
  }
  client.end;
})