const sch_form = document.getElementById("search-form")
const sch_input = document.getElementById("search")
const sch_btn = document.getElementById("searchBtn")
const img_res = document.getElementById("image-result")
const showMore_btn = document.getElementById("show-more")
var credits = document.getElementById("credits")

let keyword=""
let page=1
const access_key="qRgwrTuUBXU8VRHasj8oE8ZddTSP6_YoBgH6L_O_SsE"

async function search_image(){
    
    keyword = sch_input.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    if(page===1){
        img_res.innerHTML = ""
    }

    const results = data.results

    results.map((res)=>{

        const img = document.createElement("img")
        img.src = res.urls.small
        
        const img_link = document.createElement("a")
        img_link.href = res.links.html
        img_link.target = "_blank"

        img_link.appendChild(img);                 // 'img tag' is put under 'anchor tag' as child ,so that when image is clicked ,it directs to another webpage which shows the image

        img_res.appendChild(img_link)

    })

    showMore_btn.style.display = "block"
    credits.style.display = "block"

}

sch_form.addEventListener("submit",(e)=>{
    
    e.preventDefault()
    page=1
    search_image()
})

showMore_btn.addEventListener("click",()=>{
    page++;
    search_image();
})