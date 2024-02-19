import type { Adb } from "../adb.js";

export class AdbCommandBase {
    protected adb: Adb;

    constructor(adb: Adb) {
        this.adb = adb;
    }
}
