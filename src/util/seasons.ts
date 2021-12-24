const _seasons = ["Spring", "Summer", "Autumn", "Winter"]

export function genSeasons(startYear: number, amount: number): string[] {
    const acc = []
    for (let i = 0; i < amount; i++) {
        const str = _seasons[i%4] + (startYear + Math.floor(i/4))
        acc.push(str)
    }
    acc.reverse()
    return acc
}