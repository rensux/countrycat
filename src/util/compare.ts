import { Row } from "./types";

export function compare(data1: Row[], data2: Row[]): boolean {
    if (data1.length !== data2.length) {
        console.log(`> Unequal amount of rows. Got: ${data1.length} and ${data2.length}`);
        console.log(`> Cannot compare. Aborting.`);
        return false
    }

    console.log("> Comparing seasons...");
    for (let i = 1; i < data1.length; i++) {
        const row1 = data1[i];
        const row2 = data2[i];

        if (row1[0] !== row2[0]) {
            console.log(`> Season mismatch at row ${i}. Got: ${row1[0]} and ${row2[0]}`);
            console.log(`> Cannot compare. Aborting.`);
            return false
        }
    }
    console.log("> List of seasons match up and are in order.");
    console.log("");

    console.log("> Comparing countries...");
    for (let i = 1; i < data1[0].length; i++) {
        if (data1[0][i] !== data2[0][i]) {
            console.log(`> Country mismatch at column ${i}. Got: ${data1[0][i]} and ${data2[0][i]}`);
            console.log(`> Cannot compare. Aborting.`);
            return false
        }
    }
    console.log("> List of countries match up and are in order.");
    console.log("");


    let equal = true
    for (let i = 1; i < data1.length; i++) {
        const row1 = data1[i];
        const row2 = data2[i];

        const season = row1[0]
        for (let j = 1; j < row1.length; j++) {
            const country = data1[0][j]
            if (row1[j] !== row2[j]) {
                console.log(`> Category mismatch at ${season}:${country} (${row1[j]} !== ${row2[j]})`);
                equal = false
            }
        }
    }

    return equal
}