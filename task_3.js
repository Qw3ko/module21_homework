function test() {

    let user = localStorage.getItem('user');
    let dat = localStorage.getItem('date');

    if (user && dat) {
        alert('Добрый день, ' + user + '! Давно не виделись. В последний раз вы были у нас ' + dat);
        dat = new Date();
        localStorage.setItem('date', dat)
    } else {
        user = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
        dat = new Date();
        localStorage.setItem('user', user);
        localStorage.setItem('date', dat)
    }
}

test();