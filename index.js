function submitData(firstName, email ){
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json"
        },
        body: JSON.stringify({
            name: firstName,
            email: email
        })
    }
   
    return fetch('http://localhost:3000/users', post)
   .then ((response) => response.json())
   .then (data => addContact(data.id))
    .catch (error => whoops(error.message))
    
}


function addContact(newUser){
    const targetBody = document.querySelector('body').textContent = newUser
    document.body.append(targetBody)
}

function whoops(error){
    const targetBody = document.querySelector('body').textContent = error
    document.body.append(targetBody)
}