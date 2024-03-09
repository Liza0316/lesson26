const books = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
   ];
   const bookByGeorgeOrwell = books.find(book => book.author === 'Джордж Орвелл');
   if (bookByGeorgeOrwell) {
       console.log("Перша книга автора Джордж Орвелл:", bookByGeorgeOrwell.title);
   } else {
       console.log("Книга автора Джордж Орвелл не знайдена у масиві.");
   }   