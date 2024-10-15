class MagicArray {
    constructor(array) {
        this.array = array;
    }

    customSplice(start, deleteCount, ...items) {
        this.array = [
            ...this.array.slice(0, start),
            ...items,
            ...this.array.slice(start + deleteCount),
        ];
    }

    customSlice(start, end) {
        return this.array.slice(start, end);
    }

    customIncludes(item) {
        return this.array.includes(item);
    }

    customToLowerCase(string) {
        return string.toLowerCase();
    }

    customToUpperCase(string) {
        return string.toUpperCase();
    }

    customPush(...items) {
        this.array.push(...items);
    }

    customPop() {
        if (this.array.length > 0) {
            return this.array.pop();
        } else {
            return null;
        }
    }
}


const magicArray = new MagicArray([1, 2, 3, 4, 5]);

console.log("Original Array:", magicArray.array);

magicArray.customSplice(2, 1, 10);
console.log("After Splice:", magicArray.array);

console.log("Slice (1, 3):", magicArray.customSlice(1, 3));

console.log("Includes 10:", magicArray.customIncludes(10));

console.log("To Lowercase: 'HELLO'", magicArray.customToLowerCase('HELLO'));

console.log("To Uppercase: 'hello'", magicArray.customToUpperCase('hello'));

magicArray.customPush(6, 7);
console.log("After Push:", magicArray.array);

console.log("Popped Item:", magicArray.customPop());
console.log("After Pop:", magicArray.array);
