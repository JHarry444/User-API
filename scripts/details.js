const username = sessionStorage.getItem('username');

function load() {
    fetch(`${BASE_URL}/getUsers`).then(res => res.json()).then(json => {
        const form = document.getElementById('detailsForm');
        form['username'].value = username;
        for (let k in json[username]) {
            form[k].value = json[username][k];
        }
    }).catch(err => console.log(err));
}

function deleteUser() {
    fetch(`${BASE_URL}/deleteUser?username=${username}`, { method: 'DELETE' })
        .then(res => {
            if (res.status === 200) {
                window.location.href = './index.html'
            } else {
                throw new Error();
            }
        })
        .catch(err => console.log(err));
}

function update(event, form) {
    event.preventDefault();
    const data = {};
    for (let control of form) {
        if (control.name)
            data[control.name] = control.value;
    }
    fetch(`${BASE_URL}/setUser`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => window.location.href = './index.html')
        .catch(err => console.log(err));
}