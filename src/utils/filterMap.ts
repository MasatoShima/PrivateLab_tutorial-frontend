// 演習 2 — filterMap<T, U> 実装
export function filterMap<T, U>(
    array: T[],
    fn: (value: T, index: number, array: T[]) => U | undefined
    ): U[] {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
        const mapped = fn(array[i], i, array);
        if (mapped !== undefined) result.push(mapped);
    }
    return result;
    }

// End
