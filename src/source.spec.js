import { describe, it, before } from "node:test";
import assert from "node:assert";
import * as td from "testdouble";

// insert breakpoint anywhere in this file and run the test with debugger
// then press continue button to complete the test
// then press rerun 'test' button to run the test again and see the error

describe("test", () => {
    let testObject;

    before(async () => {
        await td.replaceEsm("./dep.js", { readFileSync: () => "fake" });
        testObject = await import("./source.js");
    });

    it("should pass", () => {
        const v = testObject.get();
        assert.equal(v, "fake");
    });
});
