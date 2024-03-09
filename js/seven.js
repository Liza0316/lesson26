const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];
const combinedSentences = sentences.join(' ');
const words = combinedSentences.split(' ');
const totalWords = words.length;
console.log("Загальна кількість слів у масиві речень:", totalWords);