// calling library
const express = require ('express')

// execute express
const app = express ()

// fungsi helloworld
const helloWorld = (request, respond) =>
// get root request
app.get('/', (request, respond) =>
    respond.send ('Hello World!')
)

app.get ('/:name/:address', (req, res)=>{
    const {name, address} = req.params
    
    res
      .status (200)
      .json ({
          name,
          address,
      })
})
app.listen (3000)


