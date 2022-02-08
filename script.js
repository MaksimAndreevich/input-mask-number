'use scrict';

const form = document.querySelector('form'),
      inpName = form.querySelector('#name'),
      inpTel = form.querySelector('#tel');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form),
          json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    console.log(json);

    form.reset();
});

const formattedToNumber = function (input) {
    return input.replace(/\D/g, '');
};

inpTel.addEventListener('input', (e) => {
    let inpTelValue = inpTel.value,
        formatTel = formattedToNumber(inpTelValue);

    if(['7', '8', '9'].indexOf(formatTel[0])  > -1){
        if(['7', '9'].indexOf(formatTel[0])  > -1){
            console.log('введите номер в другом формате');
            inpTel.value = '';
        }else if(formatTel.length == 1) {
            inpTel.value = `${formatTel[0]} (`;
        } else if(formatTel.length == 2){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}`;
        } else if(formatTel.length == 3){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}`;
        }else if(formatTel.length == 4){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}${formatTel[3]})`;
        }else if(formatTel.length == 5){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}${formatTel[3]}) ${formatTel[4]}`;
        }else if(formatTel.length == 6){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}${formatTel[3]}) ${formatTel[4]}${formatTel[5]}`;
        }else if(formatTel.length == 7){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}${formatTel[3]}) ${formatTel[4]}${formatTel[5]}${formatTel[6]}-`;
        }else if(formatTel.length == 8){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}${formatTel[3]}) ${formatTel[4]}${formatTel[5]}${formatTel[6]}-${formatTel[7]}`;
        }else if(formatTel.length == 9){
            inpTel.value = `${formatTel[0]} (${formatTel[1]}${formatTel[2]}${formatTel[3]}) ${formatTel[4]}${formatTel[5]}${formatTel[6]}-${formatTel[7]}${formatTel[8]}-`;
        }
        
    
       
    } else if(formatTel == ''){
    //     console.log('Пустая строка');
    } else {
        inpTel.value = '+' + formatTel;
    }

    console.log(formatTel.length, formatTel);


});
