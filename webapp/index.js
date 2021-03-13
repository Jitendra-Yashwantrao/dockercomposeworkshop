const express = require("express");
const redis = require("redis");
const process = require("process")

app = express();
client = redis.createClient({
    host: 'redis-service',
    port: 6379
});
client.set('visits',0);

app.get('/',(req,res)=>{
    process.exit(1)
    client.get('visits',(err,visits)=> {
        res.send('Number of visits '+ visits );
        client.set('visits', parseInt(visits) + 1);
    });

});

app.listen('8081',()=>{
    console.log(" Web app Listening on port 8081")
});
