import * as logic from "./calculatorLogic";
import { describe, test, expect } from "vitest";

const longDisplayValue = "1234567890123456789012345678901"; // 31 characters
const shortDisplayValue = "12345"; // 5 characters

describe("isDisplayLimitReached", () => {
    test("returns true when display limit is reached", () => {
        const label = "1";
        expect(logic.isDisplayLimitReached(longDisplayValue, label)).toBeTruthy();
    });

    test("returns false when display limit is not reached", () => {
        const label = "1";
        expect(logic.isDisplayLimitReached(shortDisplayValue, label)).toBeFalsy();
    });
});

describe("isMaximumDigitsReached", () => {
    test("returns true when maximum digits is reached", () => {
        expect(logic.isMaximumDigitsReached(longDisplayValue, 1)).toBeTruthy();
    });

    test("returns false when maximum digits is not reached", () => {
        expect(logic.isMaximumDigitsReached(shortDisplayValue, 1)).toBeFalsy();
    });
});

describe("appendValue", () => {
    test("appends value to empty display", () => {
        const displayValue = "0";
        const label = "5";
        expect(logic.appendValue(displayValue, label)).toBe("5");
    });

    test("appends value to non-empty display", () => {
        const displayValue = "123";
        const label = "4";
        expect(logic.appendValue(displayValue, label)).toBe("1234");
    });
});

describe("replaceOperator", () => {
    test.each(["+", "-", "*", "/"])("replaces %s operator with '-'", (operator) => {
        const overrideOperator = "-";
        expect(logic.replaceOperator(shortDisplayValue + operator, overrideOperator)).toBe(shortDisplayValue + overrideOperator);
    });

    test("does not replace operator if last character is not an operator", () => {
        const operator = "+";
        expect(logic.replaceOperator(shortDisplayValue, operator)).toBe(shortDisplayValue + operator);
    });
});

describe("notEligibleForDot", () => {
    test("returns true when last number already contains a dot", () => {
        const displayValue = "123+67.45";
        expect(logic.notEligibleForDot(displayValue)).toBeTruthy();
    });

    test("returns true when last number is empty", () => {
        const displayValue = "123+";
        expect(logic.notEligibleForDot(displayValue)).toBeTruthy();
    });

    test("returns false when last number does not contain a dot and is not empty", () => {
        const displayValue = "123.3+45";
        expect(logic.notEligibleForDot(displayValue)).toBeFalsy();
    });
});

describe("getLastNumber", () => {
    test.each([
        { displayValue: "123+45.67", expected: "45.67" },
        { displayValue: "123+45", expected: "45" },
        { displayValue: "123+", expected: "" },
    ])("returns the last number in the display value", ({ displayValue, expected }) => {
        expect(logic.getLastNumber(displayValue)).toBe(expected);
    });
});

describe("numberCount", () => {
    test.each([
        { displayValue: "123+45.67", expected: 2 },
        { displayValue: "123+45", expected: 2 },
        { displayValue: "123+", expected: 2 },
        { displayValue: "123", expected: 1 },
    ])("returns the correct number of numbers in the display value", ({ displayValue, expected }) => {
        expect(logic.numberCount(displayValue)).toBe(expected);
    });
});
