var links =document.querySelectorAll('ul li')
console.log(links);
allItems = [];
var myHttp = new XMLHttpRequest();
function getNews(countryCode){
    myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=84c8c86570e24764bde95b1a88242570`);
myHttp.send();

console.log(myHttp.status);

myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState == 4){
        allItems = JSON.parse(myHttp.response).articles
        console.log(allItems);
        display();
    }
})
}
getNews('ca')

for( var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
        var getCountry =e.target.getAttribute('countryCode')
        getNews(getCountry)
    })
}



function display(){
    var cartona = ``;

    for(var i=0;i<allItems.length;i++){
        var desc = allItems[i].description
        console.log(desc);
        if(desc != null){
            cartona +=`<div class="col-md-4">
        <div class="item">
        <img class='w-100' src='${allItems[i].urlToImage}'/>
            <h5>${allItems[i].title.split(' ').splice(0,5).join(' ')}</h5>
            <p>${desc.split(' ').splice(0,5).join(' ')}</p>
            <a href='${allItems[i].url}' class='btn btn-outline-info mb-3'>Show More</a>
        </div>
    </div>`
    // console.log(allItems[i].description.split(' ').splice(0,5).join(' '));
    // console.log(desc.split(' ').splice(0,5).join(' '));
        }
        
    }
    document.getElementById('rowData').innerHTML = cartona;
    console.log();
}



var content =`web and design and fullstack web and design and fullstack`
console.log(content.split(' ').splice(0,5).join(' '));