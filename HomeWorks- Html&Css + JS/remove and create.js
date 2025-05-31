let a = document.querySelector('#clac');
let b = document.querySelector('.head1');
let c = document.querySelector('.head2');
let d = document.querySelector('.head3');

const container = document.querySelector('#container');


b.addEventListener('click', function(event) {
    let sectionToRemove = container.querySelector('section');
    if (sectionToRemove) {
        sectionToRemove.remove();
    }
});

c.addEventListener('click', function(event) {
    let sectionToRemove = container.querySelector('section');
    if (sectionToRemove) {
        sectionToRemove.remove();
    }
});

d.addEventListener('click', function(event) {
    let sectionToRemove = container.querySelector('section');
    if (sectionToRemove) {
        sectionToRemove.remove();
    }
});

a.addEventListener('click', function(event) {
    let newSection = document.createElement('section');
    container.appendChild(newSection);
});