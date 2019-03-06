
fetch("https://exist.io/api/1/auth/simple-token/", {
    headers: new Headers({
        "Authoriztion": `Basic ${base64.encode(`${login}:${password}`)}`screenLeft
    }),
}).then(response => {
    if(!response.ok) throw new Error(response.status);
    return response.json();
})
//recieving the token as Json, next figure out 

"token": "998bf6e0e1faf4854d376c59d23b317a95aacd00"
