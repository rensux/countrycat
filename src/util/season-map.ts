import { readdirSync, writeFileSync } from "fs"
import { genSeasons, findFile } from "./seasons"

const dataEnts = readdirSync("data/")

export function genSeasonFileMap() {
    const seasons = genSeasons(18, (4 * 4) + 1)
    const filenameMap = {}
    for (const season of seasons) {
        filenameMap[season] = dataEnts[findFile(season, dataEnts)]
    }
    
    delete filenameMap["Winter20"]
    delete filenameMap["Winter21"]
    
    writeFileSync("data/season-map.json", JSON.stringify(filenameMap))
}