import { Server } from "http";
import app from "./app";


const port = 3001  ;

async function main() {
  try{

    const server: Server = app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  }catch(err){
    console.log(err)
  }
}
main()