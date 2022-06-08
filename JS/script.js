const abouts = document.querySelectorAll(".about");  

abouts.forEach(function(about){
    console.log(about)
    about.addEventListener("click", function (e) {  
        const id = e.target.dataset.id;
        console.log("Button ID: "+id)
        
        if(id){
            var section = e.target.classList[1]
            console.log("Section: "+section)
            const btns = document.querySelectorAll(".tab-btn."+ section);
            const articles = document.querySelectorAll(".content."+section);
            // console.log(btns)
            // console.log(articles)
            
            // remove selected from all the buttons 
            btns.forEach(function(btn){
                btn.classList.remove("active")
            })
            e.target.classList.add("active")
            // console.log(e)


            // hide articles
            articles.forEach(function(article){
                article.classList.remove("active");
                if(id === article.id){
                    article.classList.add("active")
                }
            }); 
        }
    })  
})

// abouts.addEventListener("click", function (e) {  
//  const id = e.target.dataset.id;
//  console.log(e)
//  console.log(id)  
//  if (id) {  
//   // remove selected from other buttons  
//   btns.forEach(function (btn) {  
//    btn.classList.remove("active");  
//   });  
//   e.target.classList.add("active");  
//   // hide other articles  
//   articles.forEach(function (article) {  
//    article.classList.remove("active");  
//   });  
//   const element = document.getElementById(id);  
//   element.classList.add("active");  
//  }  
// }); 