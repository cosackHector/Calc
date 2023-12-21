document.querySelector('body').onmousedown = function(e) {
    e.preventDefault()
};

function display(num) {
    document.form.formview.value = document.form.formview.value + num;
};

function clean() {
    document.form.formview.value = '';
};

function back() {
    // if(document.form.formview.value = '0') return
    let a = document.form.formview.value
    document.form.formview.value = a.substring(0, a.length-1)
};

function sqrt() {
    document.form.formview.value = Math.pow(2, document.form.formview.value)
};

function operators() {
    let plus = document.querySelector('.plus')
    plus.classList.add('active')
};


