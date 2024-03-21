banana + kiwi

const variableName = getRandomNumber();
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
apple + false
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
34,24,94,69,92,56,59,53,70,93,34,20,90,60,93,72,41,41,2,53,38,70,82,2,51,36,0,98,22,30,16,41,92,78,2,30,44,34,63,87,93 / true
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
50 / 79
function addNumbers(a, b) { return a + b; }
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const removeDuplicates = array => Array.from(new Set(array));
34 / 0
console.log(getRandomString());
const randomNumber = getRandomNumber();
const findLargestNumber = numbers => Math.max(...numbers);
const multiply = (a, b) => a * b;
const formatDate = date => new Date(date).toLocaleDateString();
console.log(getRandomString());

true - 63,94,27,42,91,2,18,32,61,59,24,89
const capitalizeString = str => str.toUpperCase();
const sum = (a, b) => a + b;
