import { Cell } from "@ton/core";
import { hex } from "../build/main.compiled.json";
import { Blockchain } from "@ton/sandbox";

describe("main.fc contract tests", () => {
    it("our first test", async () => {
        const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

        const blocchain = await Blockchain.create();
    });
});
