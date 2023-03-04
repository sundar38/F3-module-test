let historys = JSON.parse(localStorage.getItem("history"))
console.log(historys, typeof (historys));
console.log(typeof (historys));

let write = document.querySelector(".displayhistory")
let count = 1

write.innerHTML =
    historys.map((data) => `
                            <div class="inner">
                                ${count}. ${data.search}
                                <span>Searched On: ${data.date} at ${data.time}</span>
                            </div>
                                ` )

