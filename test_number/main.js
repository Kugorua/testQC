let btnSub = document.getElementById('btn-submit');
let inputNumber = document.getElementById('input-number');
let infor = document.getElementById('content');
let load = document.getElementById('lds-dual-ring');
let img = document.getElementById('img-hbd');
let value = "";
let isCheck = false;
inputNumber.addEventListener("change", function (e) {
    value = e.target.value;

})

btnSub.addEventListener("click", function () {
    value = value.trim();
    load.style.display = "inline-block";
    img.style.display = 'none';
    infor.innerText = "";
    if (!isNaN(value) && value.length == 5) {
        
        setTimeout(function(){
            load.style.display = 'none';
            infor.innerText = "Thông tin đúng yêu cầu";
        }, 1000);
        
    } else if (value.trim() == "19071997") {
        setTimeout(function(){
            load.style.display = 'none';
            img.style.display = 'block';
        }, 1000);
    }
    else {
        setTimeout(function(){
            load.style.display = 'none';
            infor.innerText = "Thông tin sai yêu cầu";
        }, 1000);
   }
})