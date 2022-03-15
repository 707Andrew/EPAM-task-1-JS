let firstName = prompt('Please, enter your name');
if (firstName === 'Admin') {
    let password = prompt('Please, enter a password')
    if (password === '12345') {
        alert('Welcome');
    } else if (password !== '12345') {
        alert('Incorrect password')
    }
} else if (firstName !== 'Admin') {
    alert('Access is denied')
}

