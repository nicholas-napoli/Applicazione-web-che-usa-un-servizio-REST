let auth = 'ae095ba3a39c4c0d8ab8245e523574af'

fetch(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=ae095ba3a39c4c0d8ab8245e523574af`).then(res=>{
    return res.json()
}).then(data =>{
        data.results.forEach(element => {
        let div = document.createElement('div')
        let div2 = document.createElement('div')
        div2.classList.add('div')
        let h1 = document.createElement('h1')
        h1.innerText = element.title

        let img = document.createElement('img')
        img.setAttribute('src', element.image)
        let hr = document.createElement('hr')

        let ul = document.createElement('ol')
        div2.append(h1)
        div2.append(img)
        div.append(div2)
        fetch(`https://api.spoonacular.com/recipes/${element.id}/information/?&apiKey=${auth}`).then(res=>{
            return res.json()

            
        }).then(res=>{
            let steps = (res.analyzedInstructions[0].steps)
            
            steps.forEach(el => {
                let li = document.createElement('li')
                li.innerText = el.step 
                ul.append(li)
            });


            console.log(res)
            let info = document.createElement('a')
            info.innerText = 'more info'
            info.setAttribute('href', res.sourceUrl)
            div.append(info)
        })
        div.append(ul)

        document.querySelector('.container').append(div)
        document.querySelector('.container').append(hr)
    });
})