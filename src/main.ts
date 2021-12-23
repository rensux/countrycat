import { readdirSync } from "fs";

const dataEnts = readdirSync("data")

for (const dataEnt of dataEnts) {
    console.log(dataEnt);
}