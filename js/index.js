// add element to Dom
// p => javascript course


// 1.create
// 2.content
// 3.display

const p = document.createElement("p");
p.textContent = "javascript course";
document.querySelector("#root").appendChild(p); 

const courses = [
    {title : "course 1" , isExist : true},
    {title : "course 2" , isExist : false},
    {title : "course 3" , isExist : true},
    {title : "course 4" , isExist : false},
];

//filter course that isExist : true

const availableCourse = courses.filter(c => c.isExist ===true);
console.log(availableCourse);
// (2) [{…}, {…}]
// 0: {title: 'course 1', isExist: true}
// 1: {title: 'course 3', isExist: true}
// length: 2
// [[Prototype]]: Array(0)

const msg = document.createElement("h3");
msg.textContent = `number of product is ${availableCourse.length}` ;

const body = document.querySelector("body");
body.appendChild(msg);
// number of product is 2


availableCourse.forEach ( c => {
    const p2 = document.createElement("p");
    p2.textContent = c.title;
    body.appendChild(p2);
});
// course 1
// course 3