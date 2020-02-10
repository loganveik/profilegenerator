function createHTML(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
        <style>
          .card{
            background-color: aqua;
          }
          body{
            background-color: blue;
          }
        </style>
    </head>
    <body>
    <div class="card text-center mx-3">
                    <h2>Github Username/Link: <a href="${data.html_url}">${data.login}</a> </h2>
                    <h2>Name: ${data.name}</h2>
                    <h2>Location: ${data.location}</h2>
                </div>
                    <div class="profpic text-center mt-4">
                        <img src="${data.avatar_url}" style="width:250px;height:250px;>
                    </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 fixed-bottom mx-3">
                <div class="col mb-4">
                  <div class="card">
                    <div class="card-body text-center" id="repo">
                      <h5 class="card-title">Public Repos:</h5>
                      <h4>${data.public_repos}</h4>
                    </div>
                  </div>
                </div>
                <div class="col mb-4">
                  <div class="card">
                    <div class="card-body text-center" id="gitstar">
                      <h5 class="card-title">Github Stars:</h5>
                      <h4>${data.public_gists}</h4>
                    </div>
                  </div>
                </div>
                <div class="col mb-4">
                  <div class="card">
                    <div class="card-body text-center" id="follower">
                      <h5 class="card-title">Followers:</h5>
                      <h4>${data.followers}</h4>
                    </div>
                  </div>
                </div>
                <div class="col mb-4">
                  <div class="card">
                    <div class="card-body text-center" id="following">
                      <h5 class="card-title">Following: </h5>
                      <h4>${data.following}</h4>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </body>
    </html>`
}
module.exports = createHTML
