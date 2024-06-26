const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const sidemenu = document.querySelector("#sidemenu");
const closed = document.querySelector("#closed");
const opened = document.querySelector("#opened");

tablinks.forEach(tablink => {
    tablink.addEventListener("click",() => {
        for (tablink of tablinks){
            tablink.classList.remove("active-links");
        }
        for( tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-links");
        tab_content = event.currentTarget.innerText;
        document.getElementById(tab_content).classList.add("active-tab")
    })
});

opened.addEventListener("click",() => {
    sidemenu.style.right = "0";
})

closed.addEventListener("click", () => {
    sidemenu.style.right ="-200px"
})


    const scriptURL = 'https://script.google.com/macros/s/AKfycbybgcIj4XWi1PMm-82DixoP0gR2g_d_zAIC7E1HQIcNZcbvsfz7wv2d1Vh3Gjo5ZvS_zA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })



