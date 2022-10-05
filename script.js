




const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
  container.classList.add('show-nav');
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});

const resolutions = ["Plant a tree", "Save water", "Save Electricty",, "recycle plastic", "No plastic bags", "Make a diy", "Eat organic",, "Save paper", "Prepare manure", "Use sulphate free products", "Save food", "Share food", "use public transport", "Make an eco brick", "Save water", "Save Electricty", "Save water", "Save Electricty", "Feed a bird", "Save Electricty", "Clean a public place", "No paper week", "No noise pollution", "Recycle non-biodegrabale item", "Buy something eco-friendly", "Save Electricty"];

$("#tasks").click(function(){
    var len = resolutions.length-1;
    var num = Math.floor(Math.random()*len);
    $("#task").html(resolutions[num]);
  
})

$("#ab").click(function(){
$("#ad").text("199");
})