import { describe, expect, it } from "vitest";
import { filterMap } from "../filterMap";

describe("filterMap", () => {
    it('maps numbers to strings & filters out even', () => {
        const res = filterMap(
            [1, 2, 3],
            (n) => (n % 2 ? `${n}` : undefined)
        );
        expect(res).toEqual(['1', '3']);
        console.log(res);
    });

    it('extracts property from objects', () => {
        const input = [
            { id: 1, name: 'foo' },
            { id: 2 },
            { id: 3, name: 'bar' },
        ];
        const res = filterMap(
            input,
            (o) => o.name
        );
        expect(res).toEqual(['foo', 'bar']);
        console.log(res);
    });

    it('returns [] for empty array', () => {
        expect(filterMap<number, number>(
            [],
            (n) => n)
        ).toEqual([]);
    });
});

// End
