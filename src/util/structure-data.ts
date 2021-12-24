import { Map, Row, Record } from "./types"

export function aggregateCountries(map: Map, seasonIndex: number, records: Record[]) {
    for (const record of records) {
        if (!map[record.country]) map[record.country] = []
        map[record.country][seasonIndex] = record.category
    }
}

export function rowify(map: Map, headers: Row): Row[] {
    const rows: Row[] = []
    for (const country in map) {
        const row: (string|number)[] = [country]
        for (let i = 0; i < headers.length-1; i++) {
            row.push(map[country][i] == undefined ? "-" : map[country][i])
        }
        rows.push(row)
    }
    rows.sort((r1, r2) => r1[0] > r2[0] ? 1 : -1)
    rows.unshift(headers)
    return rows
}