import {readFileSync} from "./dep.js";

export function get() {
    return readFileSync("file.txt");
}