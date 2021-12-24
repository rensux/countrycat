import { readdirSync, writeFileSync } from "fs"

const files = readdirSync("data/")

export function genSeasonFileMap(seasons: string[]) {
    const filenameMap = {}
    for (const season of seasons) {
        filenameMap[season] = files[findFileIndex(season)]
    }
    
    delete filenameMap["Winter20"]
    delete filenameMap["Winter21"]
    
    writeFileSync("out/season-map.json", JSON.stringify(filenameMap))
}

function findFileIndex(season: string): number {
    let index = -1;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.includes(season + " - Fee Calculator") || file.includes(season + "- Fee Calculator")) {
            if (index != -1) {
                console.error("Multiple files found for " + season, files[index], files[i])
                return index
            }
            index = i
        }
    }
    if (index != -1) return index
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.includes(season)) {
            if (index != -1) {
                console.error("> Multiple files found for " + season)
                console.error(files[index])
                console.error(files[i])
                return index
            }
            index = i
        }
    }

    return index
}