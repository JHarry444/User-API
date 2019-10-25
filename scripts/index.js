function login(event, form) {
    event.preventDefault();
    const data = {};
    for (let control of form) {
        if (control.name)
            data[control.name] = control.value;
    }
    console.log(data);
    fetch(`${BASE_URL}/login?username=${data.username}&password=${data.password}`)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("That shit ain't right!");
            }
        }).then(json => {
            sessionStorage.setItem('username', json.username);
            window.location.href = './details.html';
        })
        .catch(err => console.log(err));
}