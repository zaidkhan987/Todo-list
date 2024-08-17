// const item = document.querySelector('#item');
// const toDoBox = document.querySelector('#to-do-box')

// item.addEventListener( 
//     'keyup',
//     function(event){
//         if(event.key == "Enter"){
//             console.log(this.value)
//             addTodo(this.value)
//             this.value = ''
//         }      
//     })

// item.addEventListener('keyup', function (event) {
//     if (event.key === "Enter") {
//         if (this.value.trim() !== '') { // Ensures empty input is not added
//             addTodo(this.value);
//             this.value = ''; // Clears the input field
//         }
//     }
// });

// const addTodo = (item) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         ${item}
//         <i class="fas fa-times"></i>
//     `;

//     // Toggle 'done' class on click of the list item
//     listItem.addEventListener('click', function () {
//         this.classList.toggle('done');
//     });

//     // Handle delete functionality on the icon click
//     listItem.querySelector('i').addEventListener('click', function (event) {
//         event.stopPropagation(); // Prevents triggering the 'done' toggle
//         console.log(`Removing item: ${item}`);
//         listItem.remove();
//     });

//     toDoBox.appendChild(listItem);
// };


const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-box');

item.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        if (this.value.trim() !== '') { 
            addTodo(this.value);
            this.value = ''; 
        }
    }
});

const addTodo = (value) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${value}
        <i class="fas fa-times"></i>
    `;


    listItem.querySelector('i').addEventListener('click', function (event) {
        // event.stopPropagation(); 
        listItem.remove();
    });

    toDoBox.appendChild(listItem);
};


