const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// evento padão usando sempre que existe uma conexão com a aplicação web socket
// conexão com o cliente que acabou de se conectar
io.on("connection",(socket)=>{

   socket.on("disconnect", ()=>{
      console.log("X desconectou: " + socket.id);
   })

   socket.on("msg", (data) => {
      io.emit("showmsg",data);
      console.log(data);
   });
});


app.set("view engine", "ejs");

app.get("/", (req, res)=>{
   res.render("index");
})


http.listen(3000, ()=>{
   console.log("Aplicação rodando!");
})