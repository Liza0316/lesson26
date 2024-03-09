const sentenc = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];
const firstWords = sentenc.map(sentence => sentence.split(' ')[0]);
console.log(firstWords);