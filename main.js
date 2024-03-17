const accesskey = "2DZIKnGCHyjyLiqFm_4gIg3Bzv65ZubggzG3LRezIhk" ;


const searchForm = document.getElementById("Search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("Search-result");
const showMore = document.getElementById("show-more-btn");

let keyword = "" ;
let page = 1 ;

async function SearchImages () {
    keyword = searchBox.value ;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12` ;

    const response = await fetch (url);
    const data = await response.json();

    if(page === 1 ){
        searchResult.innerHTML = "";
    }

    const results = data.results ;

    results.map ((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"


        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMore.style.display = "block" ;

    // console.log(data);
}


searchForm.addEventListener("submit" , (e) => {
    e.preventDefault ();
    page = 1 ;
    SearchImages () ;
})


showMore.addEventListener("click" , () => {
    page++;
    SearchImages () ;
})