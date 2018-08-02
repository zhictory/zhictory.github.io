// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse");

	// Round Reading Time
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });

});
// 点击显示大图
document.querySelector('.content').addEventListener('click', function(event){
  
  let ele = event.target;
  if (ele.nodeName === 'IMG') {
    let div = document.createElement('div');
    let img = new Image();
    img.src = ele.src;
    div.appendChild(img);
    document.documentElement.appendChild(div);
    div.classList.add('zoom');
    setTimeout(function(){ img.classList.add('img__animation'); }, 0);
  }

}, false);
// 点击关闭大图
document.documentElement.addEventListener('click', function(event){
  
  let ele = event.target;
  if (event.target.classList.contains('zoom')) {
    document.documentElement.removeChild(ele);
  }

}, false);