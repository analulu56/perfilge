const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement;

const accordionHeaders = document. querySlectorAll;


//função para alternar o tema
function changeTheme ()  {
    const currentTheme = rootHtml.getAttribute("data-theme");("accordion-header");
    

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") 
    :rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);

toggleTheme.addEventListener("click", changeTheme);
/* Fim função mudar de tema*/

accordionHeaders.forEach(header => {
    header.addEventListener("click", () =>{
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains
        ("active");

        accordionActive ? accordionItem.classList.remove("active") :
        accordionItem.classList.add("active");
    })
} )
