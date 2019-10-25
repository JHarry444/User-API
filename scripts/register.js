function register(event, form) {
    event.preventDefault();
    const data = {};
    for (let control of form) {
        if (control.name)
            data[control.name] = control.value;
    }
    console.log(data);
    fetch(`${BASE_URL}/setUser`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            window.location.href = './index.html';
        })
        .catch(err => console.log(err));
}