let historys = JSON.parse(localStorage.getItem("history"))
console.log(historys, typeof (historys));
console.log(typeof (historys));

let write = document.querySelector(".displayhistory")
let count = 1


document.querySelector(".searched").addEventListener("click", searching)
function searching(){
    document.location.href="./searched.html"
}

document.querySelector(".clear").addEventListener("click", clearfun)
function clearfun(){ //clear search history
    console.log("hi"),  
    localStorage.removeItem("history"),
    write.innerHTML=""
    console.log(localStorage.getItem("history"))
    console.log("helo");
}


write.innerHTML = historys.map((data) => `
                            <div class="inner">
                                ${count}. ${data.search}
                                <span>Searched On: ${data.date} at ${data.time}</span>
                            </div> `) //displaying each search history



