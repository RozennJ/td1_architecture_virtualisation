import { resolve } from "path";
import { Interface } from "readline";
import * as http from 'http'
/**
 * Mandatory Hello World function.
 * @returns A string which contains "Hello world!"
 */


const si = require('systeminformation');

/**
 * Interface 
 */
interface ISystemInformation {
 
  cpu: JSON;
  system: JSON;
  mem:JSON;
  os: JSON;
  currentLoad: JSON;
  processes: JSON;
  diskLayout: JSON;
  networkInterfaces: JSON;
}


/**
 * Peupler l'interface ISystemInformation
 * 
 */

async function peupleISysInf () {
  sysInf = {
    cpu : await si.cpu(),
    system : await si.system(),
    mem : await si.mem(),
    os : await si.osInfo(),
    currentLoad : await si.currentLoad(),
    processes : await si.processes(),
    diskLayout : await si.diskLayout(),
    networkInterfaces : await si.networkInterfaces(),
  };
  return 1;
}



/**
 * function request()
 * 
 */

export const requesting = (): http.Server => {
  

  return http.createServer( (req, res) => {
  const url = req.url;
  


  if (url == "/api/v1/sysinfo") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    peupleISysInf(); 
    res.write(JSON.stringify(sysInf));
    res.end();
    
  } else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Erreur 404');
    res.end();
  
  }
  }).listen(3030);
}

export const helloWorld = (): string => {
  return 'Hello world!';

};

peupleISysInf(); 

let sysInf : ISystemInformation;

if (require.main ===module) {
  requesting(); 
}