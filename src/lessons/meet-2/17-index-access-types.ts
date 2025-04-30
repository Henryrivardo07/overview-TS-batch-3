type Book = {
  title: string;
  author: string;
};

type TitleType = Book["title"]; // hasilnya string

const bookTitle: TitleType = "Learn TypeScript";
console.log("Book Title:", bookTitle);
