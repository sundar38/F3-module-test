var user=[]

var print=document.querySelector(".displaypicture")
let image=document.getElementsByTagName("img")

function searchnow() {
    
    fetch("https://www.googleapis.com/books/v1/volumes?q=percy+jackson")
        .then((data) => data.json())
        .then((data) => validate(data.items))

    function validate(data) {
        //localStorage.removeItem("history")
        print.innerHTML=""
        var searchval = document.querySelector(".search").value
        console.log(data);
        let dateandtime=new Date()
        

        
        
        console.log(searchval);
        document.querySelector(".text").innerHTML=`Book Results For '${searchval}'`
        let count=true
        let arr=[]
        for(let i=0;i<10;i++){
            //console.log("hi");
            //console.log(data[i].volumeInfo.title);
            //console.log(data[i].volumeInfo.title.includes(searchval));
            if(data[i].volumeInfo.title.includes(searchval)===true){     //searching by title            
                console.log(data[i], typeof(data[i]));
              
                arr.push(data[i])
                console.log(arr);
                print.innerHTML+=`                 
                    <div class="main">
                        <img src=${data[i].volumeInfo.imageLinks.thumbnail}>
                        <div>Title: ${data[i].volumeInfo.title}</div> 
                        <div>Author: ${data[i].volumeInfo.authors[0]}</div> 
                        <div>Page Count: ${data[i].volumeInfo.pageCount}</div>
                        <div> Publisher: ${data[i].volumeInfo.publisher}</div>
                        <button class="buy">Buy Now</button>
                    </div>`        
            }
        }
       

        let obj={  //creating object
            search: searchval,
            date: dateandtime.toLocaleDateString(),
            time: dateandtime.toLocaleTimeString(),
            values: arr
        }
   
        //localStorage.removeItem("history")
        let searchhistory=JSON.parse(localStorage.getItem("history"))
        console.log(searchhistory, typeof(searchhistory));
       
        console.log(obj);

        if(searchhistory){
            searchhistory.push(obj)
            //console.log("in if");
        }
        else{
            searchhistory=[obj]
            //console.log("in else");
            console.log(searchhistory);
        }
        localStorage.setItem("history", JSON.stringify(searchhistory))
       
        console.log(JSON.parse(localStorage.getItem("history")));
        document.querySelector(".direct").addEventListener("click",direct)
        
        function direct(){ //go to history page
            //console.log("hi");
            window.location.href="./history.html"
        }
        
    }
}

