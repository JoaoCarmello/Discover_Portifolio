const list = document.querySelector('.card-project')

let delay = 0.4
function getProject(){
delay = delay + 0.4
    fetch('https://api.github.com/users/MatheusPereiraC/repos')
    .then(async res =>{

        var data = await res.json()
        data.map(item =>{
            
            let div = document.createElement('div')

            div.innerHTML = 
        ` <section class="projects">
        <a href="${item.html_url}"/>
        <div class="descriptions">
                <h4 class="name"><img src="Assets/explorer.svg" alt="">${item.name}</h4>
                <p class="about">${item.description}</p>      
            
            <div class="atributes">
                <img src="Assets/star.svg" class="stars"><span>100</span>
                <img src="Assets/branch.svg" class="branch"><span>100</span>
            </div>

          </div>   
          </section>`

          list.appendChild(div)
        })

    }).catch(e => console.log(e))
}
getProject()