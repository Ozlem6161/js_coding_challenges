
let posts = [
    { title: 'Title 1', author: 'Noel'},
    { title: 'Title 2', author: 'Noel'},
    { title: 'Title 3', author: 'leon'},
    { title: 'Title 3', author: 'leon'},

];

let allTheTitle3 = posts.filter (
    element => element.title == "Title 3"
)

console.log(allTheTitle3)