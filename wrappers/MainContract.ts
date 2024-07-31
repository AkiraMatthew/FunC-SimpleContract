import { Contract, Address, Cell } from "@ton/core";

export class MainContract implements Contract {
    constructor(
        readonly address: Address,
        readonly init?: { code: Cell; data: Cell } // the init property have the initial state of our contract
    ) {}
}
