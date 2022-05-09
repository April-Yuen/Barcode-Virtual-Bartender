//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink(){
    let drink = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    fetch(url)
        .then(res => res.json()) // parse response as json
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = data.drinks[0].strDrink;
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[0].strInstructions;
            document.querySelector('ul').innerText = " "
            for(let i = 1; i <= 15; i++){
                // console.log(data.drinks[0].strIngredienti)
                const key = `strIngredient${i}`
                const value = data.drinks[0][key]
                console.log(value);
                if (value !== null){
                    const li= document.createElement('li')
                    li.textContent = value
                    document.querySelector('ul').appendChild(li); 
                }
            }
            document.querySelector('.measurements').innerText = " "
            for(let i = 1; i <= 15; i++){
                const key2 = `strMeasure${i}`
                const value2 = data.drinks[0][key2]
                console.log(value2);
                 if (value2 !== null){
                     const newLi = document.createElement('li')
                     newLi.textContent = value2
                     document.querySelector('.measurements').appendChild(newLi);
                 }
            }
        }) 
        .catch(err => {
         console.log(`error ${err}`)
        })
        disableBtn()

}






