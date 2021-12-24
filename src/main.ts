import { stringify } from "csv/sync";
import { readFileSync, writeFileSync } from "fs";
import { parseCsv } from "./util/read-data";
import { genSeasonFileMap } from "./util/season-map";
import { genSeasons } from "./util/seasons";
import { aggregateCountries, rowify } from "./util/structure-data";
import { transpose } from "./util/transpose";
import { Map } from "./util/types";

const seasons = genSeasons(18, (4*4) + 1)
// genSeasonFileMap(seasons) // generate a mapping from season to data file
const seasonFileMap = JSON.parse(readFileSync("out/season-map.json").toString())

const countryMap: Map = {}
for (const season in seasonFileMap) {
    aggregateCountries(countryMap, seasons.indexOf(season), parseCsv(seasonFileMap[season]))
}

const rows = rowify(countryMap, ["", ...seasons])
const out: string = stringify(transpose(rows))

writeFileSync("out/out.csv", out)