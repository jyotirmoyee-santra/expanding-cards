const panels = document.getElementsByClassName('panel_active');

Array.from(panels).forEach((panel_active)=>{
    console.log("clicked");
     panel_active.addEventListener('click',()=>{
        removeActiveclasses();
        console.log(panel_active.classList.contains("active"));
        panel_active.classList.add('active');
     });
})

function removeActiveclasses()
{
    Array.from(panels).forEach((panel_active)=>{
        panel_active.classList.remove('active')
    })
}