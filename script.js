console.log("This part started");
const star1Btn = document.getElementById("star1");
const star2Btn = document.getElementById("star2");
const star3Btn = document.getElementById("star3");
const star4Btn = document.getElementById("star4");
const star5Btn = document.getElementById("star5");
const submitBtn = document.getElementById("submit");
const movieNameEl = document.getElementById("movieName");
const moviePhotoEl = document.getElementById("moviePhoto");
const starBtn = [star1Btn.classList,star2Btn.classList,star3Btn.classList,star4Btn.classList,star5Btn.classList];
const emptyStar ="fa-star-o"
const fullStar = "fa-star"
const halfStar = "fa-star-half-o" 
const starList  = [emptyStar,fullStar,halfStar];
const movieName =["Maanadu","Soorarai Pottru" , "Ps-1" , "Vada Chennai","Paruthiveeran"]
let o =0
setMovie(o)
star1Btn.addEventListener("click", function(){
   updateStar(0,whichstartoset(0))
})
star2Btn.addEventListener("click",function(){
  
    updateStar(1,whichstartoset(1))
})
star3Btn.addEventListener("click",function(){
    updateStar(2,whichstartoset(2))
})
star4Btn.addEventListener("click",function(){
    updateStar(3,whichstartoset(3))
})
star5Btn.addEventListener("click",function(){
    updateStar(4,whichstartoset(4))
})
function whichstartoset(n){
    if (starBtn[n].contains(emptyStar)){
        return 1;
    }
    if (starBtn[n].contains(fullStar)){
        return 2;
    }
    if (starBtn[n].contains(halfStar)){
        return 0;
    }
}
function updateStar(n,s){
    setStar(s,n)
    for(i=n-1; i>=0 ; i--){
        setStar(1,i)
    }
    for(i=n+1;i<=4;i++){
        setStar(0,i)
    }
}
function setStar(n,i){
    starBtn[i].remove(starList[0])
    starBtn[i].remove(starList[1])
    starBtn[i].remove(starList[2])
    if(n==0) starBtn[i].add(starList[n]);
    if(n==1) starBtn[i].add(starList[n]);
    if(n==2) starBtn[i].add(starList[n]);
}


submitBtn.addEventListener("click",function(){
   getRatingValue()
})

function getRatingValue(){
    // console.log("0;empty , 1: full , 2: half")
    let rating = 0;
    for(i=0 ; i<5 ; i++){
        let star= whichstartoset(i);
        if (star == 0) star =1/2;
        else star = star-1;
        rating +=star;
        setStar(0,i)
    }
    // console.log("Rating" , rating);
    console.log(movieName[o] , " : " , rating)
    if(rating != 0) {setMovie(++o)}
}

function setMovie(i){
    if (i < movieName.length){
    movieNameEl.innerText = movieName[i];
    moviePhotoEl.src =  `photo/movie${i}.jpg`;
    }
}
