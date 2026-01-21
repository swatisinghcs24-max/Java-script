let mydiv = document.querySelector('#mydiv'); 

let newElement = document.createElement('span');
newElement.textContent = "swati singh"
mydiv.insertAdjacentElement('beforebeign', newElement );
// undefined
// mydiv
// <div id=​"mydiv">​…​</div>​
// let newElement = document.createElement('span');
// undefined
// newElement
// <span> ​</span>​ 
// newElement.textContent = "this is me swati";
// 'this is me swati'
// newElement
// <span>​this is me swati​</span>​
// mydiv.insertAdjacentHTML('beforebegin' ,newElement);

// mydiv.insertAdjacentElement('beforebegin' ,newElement);