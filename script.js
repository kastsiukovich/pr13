var list = document.querySelector('#todo-list');

list.addEventListener('click', function (event) {
    // console.log(event.target.tagName);
    if (event.target.tagName === 'P') {
        event.target.classList.toggle('task-no-active');
    }
})


//2 task

//if (!event.target.classList.contains('answer-item'))
var ul = document.querySelector('.collection');
var comit = document.querySelector('.answer-item');
ul.addEventListener('click', function (e) {
    // console.log(e.target.className);
    console.log(e.target.className);
    if (!e.target.classList.contains('answer-item')) {
        e.target.nextElementSibling.classList.toggle('answer-item-show');
    }
})


//3 task

var btnOpenModal = document.querySelector('#open-modal');
var modal = document.querySelector('#modal1');

btnOpenModal.addEventListener('click', function () {
    modal.classList.add('modal_open');
})

document.body.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target !== btnOpenModal && !e.target.closest('#modal1')) {
        modal.classList.remove('modal_open');
    }
})

// task 4
var imgBig = document.querySelector('.container');

imgBig.addEventListener('click', function (event) {
    console.log(event.target);
    var img = document.querySelector('.active-image');
    var imgActiv = document.querySelector('.photo').firstElementChild;
    if (!event.target.classList.contains('active-image')) {
        img.classList.remove('active-image');
        event.target.parentNode.classList.add('active-image');
        imgActiv.src = event.target.src;
    }
})



// task 5


