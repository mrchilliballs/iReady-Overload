const injected_code = `
<main class="container">
<section class="bg-blue rounded-circle" id="popup">
  <img src="icon.png" alt="iready icon" class="iready-img">
    
    <div id="collapse">
          Some placeholder content for the collapse component.
      </div>
      </section>
</main><!--
<script src="script.js"></script>
<script src="libs/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
<script>
const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
picture.addEventListener("click", ()=>{
    popup.classList.toggle("expanded")
    picture.classList.toggle("less-margin");
})
</script>
`;