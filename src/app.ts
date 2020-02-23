import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { Application, Request, Response } from "express";

dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT || 3000;

//our stuff
const {MongoClient} = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:3000/Articles", function(err, db){
    if(err){ return console.dir(err);}

    var collection = db.collection('Articles');
    var docs = [{title: "title"}, {subtitle: "subtitle"}, {body: "the body of the article"}, {author: "the author's full name"}];

});
const client = new MongoClient(uri);
var databasesList;
await client.connect();
await listDatabases(client);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
//end
app.use(bodyParser.json());
app.use(cors());

if (port == "") {
    // tslint:disable-next-line:no-console
    console.log("Missing environment variables for configuration (check .env.example and create a .env)")
    process.exit(1);
}

app.get( "/status", ( req, res ) => {
    res.send({
     status: "Up"
    });
} );

app.use((req: Request, res: Response) => {
     res.status(500).send({
     status: 500,
     message: "Not Implemented"
    });
});
export { app, port }
