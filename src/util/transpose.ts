import { Row } from "./types"

export function transpose(data: Row[]): Row[] {
    const transposed = []
    for (let i = 0; i < data[0].length; i++) {
        transposed[i] = []
        for (let j = 0; j < data.length; j++) {
            transposed[i][j] = data[j][i]
        }
    }
    return transposed
}