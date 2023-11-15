// const { isDatabaseFile } = require("../database.js");
import { isDatabaseFile, convertToJson } from "../database.js";
import { describe, it, expect } from "vitest";

describe("#isDataBaseFile", () => {
	describe("test the file extension of file", () => {
		it("test that file is .db", () => {
			expect(isDatabaseFile("testFile.db")).toBe(true);
		});
		it("test that file is not .db", () => {
			expect(isDatabaseFile("img.png")).toBe(false);
			expect(isDatabaseFile("hello.txt")).toBe(false);
		});
	});
});

describe("#convertToJson", () => {
	describe("convert db file to json format", () => {
		it("rejects non-db files", () => {
			expect(convertToJson("database.png")).toBeNull();
		});
	});
});
