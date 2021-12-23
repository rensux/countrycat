import { parse } from "csv/sync";
import { readFileSync } from "fs";

const seasonFileMap = JSON.parse(readFileSync("data/season-map.json").toString())
const seasonCategoriesMap = {}

for (const season in seasonFileMap) {
    seasonCategoriesMap[season] = parseCsv(seasonFileMap[season])
}

function parseCsv(filename):any {
    const file = readFileSync("data/"+filename).toString()
    return parse(file, {
        columns: ["country", "category"],
        relaxColumnCount: true,
        skipRecordsWithEmptyValues: true,
        onRecord: (record, _) => {
            if (record["country"].includes("LBG") || record["country"].includes("Observer") || record["country"].includes("Fee Calculator") || !record["country"]) {
                // console.log("removing: ", record);
                return null
            }
            return record
        }
    })
}