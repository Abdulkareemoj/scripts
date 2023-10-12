//this one just gets the list of anime on the seasonal animelist on Myanimelist.net
// its to be run in the browser, but if you can find a better way to use it feel free

const collection = document.getElementsByClassName("h2_anime_title")
 const outerHTMLarr= []
 for (let i=0; i<collection.length; i++ ){
 console.log(collection[i].outerText)
 }


// same as above but now it puts the list into a txt file which is automatically downloaded
const collection = document.getElementsByClassName("h2_anime_title");
const outerHTMLarr = [];
for (let i = 0; i < collection.length; i++) {
  outerHTMLarr.push(collection[i].outerText);
}

const fileContent = outerHTMLarr.join("\n");
const blob = new Blob([fileContent], { type: "text/plain" });
const url = URL.createObjectURL(blob);

const link = document.createElement("a");
link.download = "output.txt";
link.href = url;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
