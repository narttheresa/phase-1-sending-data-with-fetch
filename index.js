// Add your code here
//fetch() request inside the submitData
//submitdata returns the fetch()




function submitData(name,email) {
    let data = {
        name: name,
        email: email
    };

    let configData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/users', configData)      
        .then(resp => resp.json())
        .then(data => {
            let id = data.id;
            document.body.innerHTML += `<p> New user ID: ${id}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`
        });


}

submitData('Jane Doe', 'Jane.doe@email.com');









    