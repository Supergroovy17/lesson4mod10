//Book is my constructor by putting title author and pages in () I also must give them value by using this.______ =________;
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.displayInfo = function() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    };
}

let library = [];

// Function to add a new book to the library
function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

// Function to search for books by title
function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

// Function to search for books by author
function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase() === author.toLowerCase());
}
function filterBooksByPages(library){
return library.filter(book => book.pages >100);
}
function addPrefixesToBooks(library){
    return library.map(book =>{
        return{
            title:`Title: ${book.title}`,
            author:`Author: ${book.author}`,
            pages: book.pages,
            displayInfo: function() {
                return `Title: ${this.title}, Author: ${this.author},Pages: ${this.pages}`;

            }
        };
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
addBook('1984', 'George Orwell', 328);
addBook('To Kill a Mockingbird', 'Harper Lee', 281);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
addBook('Short Story', 'Some Author', 50);


console.log(library.map(book => book.displayInfo())); 
let foundBooksByTitle = searchByTitle('1984');
console.log(foundBooksByTitle.map(book => book.displayInfo())); 

let foundBooksByAuthor = searchByAuthor('Harper Lee');
console.log(foundBooksByAuthor.map(book => book.displayInfo()));

console.log("All Books");
console.log(library.map(book=> book.displayInfo())); 

let booksWithMoreThan100Pages = filterBooksByPages(library);
console.log("Books with more than 100 pages:");
console.log(booksWithMoreThan100Pages.map(book => book.displayInfo())); 

let booksWithPrefixes = addPrefixesToBooks(library);
console.log("Books with prefixes:");
console.log(booksWithPrefixes.map(book => book.displayInfo())); 


/////////////////////////////////////////////////////////////////////////////////////////////////////
function Account (accountNumber,balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;

}
Account.prototype.deposit = function(amount){
    if(amount > 0){
            this.balance += amount;
            return `Deposited ${amount}. New balance is ${this.balance}.`;
    }else{
        return "Deposit amount must be positive.";
    }
};
//The && operator ensures that both conditions must be true for the withdrawal to proceed:
Account.prototype.withdraw = function(amount){
    if (amount > 0 && amount <= this.balance){
        this.balance -=amount;
        return `Withdrew ${amount}. New balance is ${this.balance}.`;
    }else if (amount > this.balance) {
        return "insufficient funds.";
    }else{
        return "Withdraw successfull";
    }
};
Account.prototype.calculateCompoundInterest = function(rate, years) {
    if (rate > 0 && years > 0) {
        let compoundInterest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
        return `Compound interest for ${years} years at an interest rate of ${rate}% is ${compoundInterest.toFixed(2)}.`;
    } else {
        return "Interest rate and years must be positive.";
    }
};
//rate > 0 and years > 0: Checks if both the interest rate and the number of years are positive.
//Math.pow((1 + rate / 100), years): Calculates the compound interest factor.
//this.balance * factor - this.balance: Computes the compound interest.
//compoundInterest.toFixed(2): Rounds the result to two decimal places for readability.
//Return Statement: Provides the calculated compound interest or an error message if the input values are not positive.
//////////////////////////////////////////////////////////////////////////////////////////////
let myAccount = new Account(123456, 1000, 'Brian Suverkrubbe');
console.log(`Initial balance: ${myAccount.balance}`);
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(1500));
console.log(myAccount.calculateCompoundInterest(5, 2));
//////////////////////////////////////////////////////////////////////////