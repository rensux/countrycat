const _seasons = ["Spring", "Summer", "Autumn", "Winter"]


export function genSeasons(startYear: number, amount: number): string[] {
    const acc = []
    for (let i = 0; i < amount; i++) {
        const str = _seasons[i%4] + (startYear + Math.floor(i/4))
        acc.push(str)
    }
    return acc
}

export function findFile(season: string, files: string[]): number {
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