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
    return input.value.replace(/\D/g, '');
};

inpTel.addEventListener('input', (e) => {
    let inpValue = formattedToNumber(inpTel),
        formatTel = '';

    if(['7', '8', '9'].indexOf(inpValue[0])  > -1){
        if(inpValue[0] == '9') inpValue = '7' + inpValue;
        const first = (inpValue[0] == '8') ? '8' : '+7';
        formatTel = first + ' ';
        if(inpValue.length > 1) formatTel += '(' + inpValue.substring(1,4);
        if(inpValue.length >= 5) formatTel += ') ' + inpValue.substring(4,7);
        if(inpValue.length >= 8) formatTel += '-' + inpValue.substring(7,9);
        if(inpValue.length >= 10) formatTel += '-' + inpValue.substring(9,11);

    } else {
        formatTel = '+' + inpValue.substring(0,16);
    }

    inpTel.value = formatTel;

    console.log(inpValue);


});










