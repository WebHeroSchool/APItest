let body = document.body;
let string = window.location.search;
let url = 'https://api.github.com/users/kri0k';

fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);

        let photo = new Image();
        photo.src = json.avatar_url;
        body.append(photo);

        let name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Неизвестно';
        }
        body.append(name);

        let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Неизвестно';
        }
        body.append(bio);

    })
