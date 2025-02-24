let menu=document.queryselect('#menu-icon');
let navbar=document.queryselect('.navbar');

manu.onlick=()=>{
	manu.classlist.toggle('bx-x');
	navbar.classlist.toggle('active');
}
window.onscroll=()=>{
	manu.classlist.remove('bx-x');
	navbar.classlist.remove('active');
}
   const typed = new Typed('.multiple-text', {
      strings: ['fronted developer', 'backend developer','blockchain developer','web design',''],
      typeSpeed: 80,
      backspeed: 80,
      backDelay: 1200,
      loop:true,
    });