/* THEORY
// const array = [1,2,3] // объявление массива через const
// const arrayString = ['a','b','c']
// // const array = new Array(1,2,3)//Вариация объявления массива
// // console.log(arrayString.length) //получение длины массива
// console.log(array[0]) //получение определенного значение индекса в массиве
// console.log(array[array.length-1])//получение значения последнего индекса в массиве считает длину массива и вычитает 1 , поулчается последний индекс
// array[0] = 'Privet' //замена значения в массиве
// console.log(array)
 */
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)
// const notes = ['Записать блок про массивы'/,'Рассказать теорию объектов']
// function render() {
//     // for (let i=0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i]))
//     // }
//     for (let note of notes){
//         listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note))
//     }
// }
// render()
createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
    const newNote = {
        title : inputElement.value,
        completed: false,
    }
    // listElement.innerHTML =
    // listElement.insertAdjacentHTML('beforeend',getNoteTemplate(newNote))
    notes.push(newNote)//изменения массива не равно изменения шаблона
    render()
    inputElement.value = ''
}

// function getNoteTemplate(title) {
//     return `
//          <li
//              class="list-group-item d-flex justify-content-between align-items-center"
//             >
//              <span>${title}</span>
//              <span>
//                <span class="btn btn-small btn-success">&check;</span>
//                <span class="btn btn-small btn-danger">&times;</span>
//              </span>
//         </li>
//     `
// }
/*object
const person = {
    firstName:'Alina',
    lastName: 'Menkova',
    year: 2001,
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }
}

console.log(person.year)
console.log(person['firstName'])
const key = 'lastName'
console.log((person[key]))
person.getFullName()
*/
const notes = [
    {
        title: 'Записать блок про массивы',
        completed: false,
    },
    {
        title: 'Рассказать теорию объектов',
        completed: true,
    },
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i=0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i], i))
    }
    // for (let note of notes){
    //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note))
    // }
}

render()

listElement.onclick = function (event) {
    // console.log(event.target.dataset.index) //показывает на что кликнули
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)// или parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `
         <li
             class="list-group-item d-flex justify-content-between align-items-center"
            >
             <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
             <span>
               <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
               <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
             </span>
        </li>
    `
}