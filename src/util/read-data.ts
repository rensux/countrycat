import { parse } from "csv/sync"
import { readFileSync } from "fs"
import { Record } from "./types"

export function parseCsv(filename: string): Record[] {
    const file = readFileSync("data/"+filename).toString()
    return parse(file, {
        columns: ["country", "category"],
        relaxColumnCount: true,
        skipRecordsWithEmptyValues: true,
        onRecord: ({country, category}, _) => {
            if (
                country.includes("LBG") ||
                country.includes("Observer") ||
                country.includes("Fee Calculator") ||
                !country) {
                // console.log("removing: ", record); //test if filtering out incorrect lines
                return null
            }
            category = Number(category)
            country = country === "FYR Macedonia" ? "North Macedonia" : country
            return {country, category}
        }
    })
}