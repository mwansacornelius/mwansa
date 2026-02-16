import toDisplay from './nav.js';

let show=document.getElementById("show-here")
let quotes=document.getElementById("quotes")

toDisplay(show)

async function getTodaysQuote() {
     const response= await fetch("https://api.api-ninjas.com/v2/randomquotes"/*quotes?categories=wisdom"*/,{
          method:"GET",
          headers:{
               "X-Api-Key":"261HE69qwnK0Zk5fuBrdBgoT40BHPrd4I4YwfS2B"
          }
     }
     )
     const data= await response.json()
     quotes.innerHTML=`
     <p><span id="name">${data[0].author} -</span> 
          <q>${data[0].quote}</q>
     </p>
     `
     
}

getTodaysQuote()