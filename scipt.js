const fs = require('fs')
const axios = require('axios');

const htmlStart =`
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
`;
const htmlEnd =`
</body>
</html>
`;

let content ="";
 axios.get('https://randomuser.me/api/?results=100')
.then((response) => {
    response.data.results.forEach((user) => {
    content +=`
    <div class="users">
    <img src="${user.picture.large}"/>
        <h1>${user.name.first},${user.name.last}</h1>
        <h2>${user.gender}</h2>
    </div>

    `;
}) ;

fs.writeFileSync('index.html', htmlStart)
fs.appendFileSync('index.html', content)
fs.appendFileSync('index.html', htmlEnd)



})
.catch(function (err) {
    console.log(err);
});