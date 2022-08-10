## Barcode: <a href="https://barcoderevised.netlify.app/">Live Demo</a>
<a href="https://barcoderevised.netlify.app/" target="_blank"><img src="img/barcodepic.png" /></a>

## How It's Made:

I used The Cocktail DB API to fetch data through the use of promises. The fetch allowed me to avoid callback hell. Through the fetch function, I was able to input the path to the Cocktail DB API and return a promise to the response of that request. 

The user will enter in a drink they would like to make in the input, then we will make a fetch to the Cocktail DB API, which will return a response in json(). Then I pass value I recieved from the Promise into my chain as the data object. Then I identify the various keys values I would like displayed on the DOM. Finally I am able to render the values on the DOM using Javascript, HTML, and CSS. 

**Tech used:** HTML, CSS, JavaScript

## Optimizations

If I had more time, I would fetch more information from the database and perhaps add another external API that includes videos of how to make the cocktails. The cocktail DB does not include videos on how to make the cocktails. Perhaps I could also add a list of drinks that can be made based on the type of alcohol and let the users choose I drink they would like to make. 

## Lessons Learned:

I learned how to fetch data from APIs, render that data into the DOM, and also take input from users. I also brushed up on my CSS skills. Being able to take the input from the user and return the requested data, was very rewarding. 




