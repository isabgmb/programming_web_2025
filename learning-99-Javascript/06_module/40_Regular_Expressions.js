// Basic regex literal, looking for the exact text "hey":
let re1 = /hey/;
// Or as a constructor:
let re2 = new RegExp("hey");

// Basic check: test if the regex matches the string at all
re1.test("blahblahblah hey blahblahblah") // ✅
re1.test("blah") // false

// Special / escaped characters:
/\d/ // digit
/\w/ // alphanumeric or underscore
/\s/ // whitespace (spaces, tabs, newlines)
/./  // any character
// Match the start of a string with `^`:
/^hey/.test('hey')     //✅
/^hey/.test('bla hey') //❌
// and the end with `$`:
/hey$/.test('bla hey') //✅
/hey$/.test('hey you') //❌



// `.*` matches any character 0 or more times:
/^hey.*joe$/.test('hey how are you joe') //✅

// `+` matches one or more times:
/^\d+$/.test('12')     //✅

// `{n}` matches exactly N items:
/^\d{3}$/.test('123')  //✅

// Parentheses capture groups. `.match()` returns group contents:
'123s'.match(/^(\d{3})(\w+)$/)
//Array [ "123s", "123", "s" ] - whole match, group 1, group 2, ...

// Flags: `g` - multiple matches, `i` - case insensitive
/hey/ig.test('HEy') //✅

// Other methods:
"abcdefg".search(/d/) // index of first match: 3
"Hello world!".replace(/world/, 'dog') // "Hello dog!""
"12-34-56".split(/-/) // ['12', '34', '56']
