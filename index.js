console.log('asd');
async function request()
{
    console.log(fetch("http://jsonplaceholder.typicode.com/posts"));
    let response = await fetch("http://jsonplaceholder.typicode.com/posts");
    console.log('response.json()', response.json())
    console.log(response);
    if (response.ok) {
        let json = await response.json()
        console.log(json)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}