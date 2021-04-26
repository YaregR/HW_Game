let form = document.forms.generator;
let rowEl = document.querySelector('.rows-blocks');
let colEl = document.querySelector('.field-rows');
let genBtn = document.querySelector('.genBtn');
let field = document.querySelector('.field');


genBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    let formData = new FormData(form);

    let number1 = formData.get('rows');
    let number2 = formData.get('columns');

    for (let i = 0; i < number1; i++) {
        rowEl.insertAdjacentHTML('beforeend', '<div class="block"></div>');
        };
    
    for (let j = 1; j < number2; j++) {            
        // colEl.insertAdjacentHTML('beforeend', '<div class="rows-blocks"><div class="block"></div></div>');
        let cloneRow = rowEl.cloneNode(true); 
        rowEl.after(cloneRow);
        };     
    
});
 


// genBtn.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     let formData = new FormData(form);

//     let rows = formData.get('rows');
//     let columns = formData.get('columns');

//     for (let i = 0; i < rows; i++) {
//         field.style.gridTemplateColumns = `repeat(${columns}, ${Number(1)}fr)`;
//         field.style.gridTemplateRows = `repeat(${rows}, ${Number(1)}fr)`;    
//     };

       
//     let total = rows * columns;
//     for (let j = 0; j < total; j++) {
//         field.innerHTML = '<div class="block"></div>';
//     }
    
// });



