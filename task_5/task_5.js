const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;

    fetch('https://jsonplaceholder.typicode.com/users/' + input + '/todos')

        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((data) => {
            // Объект результата в формате JSON
            if (Object.keys(data).length == 0) {
                reject("Пользователь с указанным id не найден")
            } else {
              console.log(data);
                let countData = data.length;
                let ul = document.createElement('ul');
                document.write('<div className="tracks-ul"><ul className="ul">');
                for (let i = 0; i < countData; i++) {
                    let userId = data[i].userId;
                    let id = data[i].id;
                    let title = data[i].title;
                    let completed = data[i].completed;
                  console.log(userId);

                    document.write('<ul className="mess-hide"><li className="name"><h4>' + userId + '</h4></li><li className="song"><h4>' + id + '</h4></li><li className="url"><h4>' + title + '</h4></ className="url2"><h4>' + completed > +'</h4></ul>');
                }
                document.write('</ul></div>');
            }
        })
        .catch(() => {
            console.log("Пользователь с указанным id не найден")
        });
});