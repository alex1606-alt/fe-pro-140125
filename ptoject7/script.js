
const booksArray = [
    {
        title:"пригоди аліси",
        year:1865,
        rating:4.5
    },
    {
        title:"1984",
        year:1949,
        rating:4.8
    },
    {
        title:"гаріман",
        year:1997,
        rating:4.7
    }
];
const tableBody = document.getElementById('table-body');


booksArray.forEach(book => {
    const row = document.createElement('tr');
    
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    
    const yearCell = document.createElement('td');
    yearCell.textContent = book.year;
    
    const ratingCell = document.createElement('td');
    ratingCell.textContent = book.rating;
    
    
    row.appendChild(titleCell);
    row.appendChild(yearCell);
    row.appendChild(ratingCell);
    
    
    tableBody.appendChild(row);
});














