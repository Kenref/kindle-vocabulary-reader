import "./public/vocab.db";
// import the test

test("check that the file is a .db file", () => {
	expect(isDatabaseFile("database.db")).toBe(true);
});
test("check that the file is NOT a .db file", () => {
	expect(isDatabaseFile("img.png")).toBe(false);
	expect(isDatabaseFile("hello.txt")).toBe(false);
});
