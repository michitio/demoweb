// BÀI 1 ------------------------
var box = document.getElementById('box1');
var color = document.getElementById('takeColor');

// click vào hình vuông thì hiện bảng chọn màu
box.onclick = function() {
    color.click();
    box = this.id;
}

// bảng chọn màu được chọn thì đổi màu box 
color.onchange = function() {
    var boxTemp = document.getElementById('box1');
    boxTemp.style.backgroundColor = color.value;
}

// BÀI 2 ------------------------

function validEmail(email) {
    var firstSplit = email.split("@");
    if (firstSplit.length === 1)
        return false;
    var secondSplit = firstSplit[1].split(".");
    if (secondSplit.length < 2)
        return false;
    return true;
}

function validPassword(password) {
    return password.length >= 8 ? true : false;
}

function validHoTen(name) {
    return name.split(" ").length >= 2 ? true : false;
}

document.getElementById('submit').onclick = function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    if (validEmail(email) && validPassword(password) && validHoTen(
            name))
        alert("Ghi nhận dữ liệu");
    else
        alert("Dữ liệu nhập lỗi!");
}

// BÀI 3 ------------------------

function formatString(num) {
    if (num.toString().length === 1) {
        return '0' + num
    } else
        return num
}

function getTime() {
    var d = new Date();
    return formatString(d.getHours()) + ":" + formatString(d.getMinutes()) + ":" + formatString(d.getSeconds());
}

function UpdateTiming() {
    document.getElementById('clock').innerHTML = getTime();
    setTimeout(UpdateTiming, 1000);
}

UpdateTiming();

// BÀI 4 ------------------------

function changeVisibility(id) {
    var list = document.getElementById(id)
    if (list.style.visibility === "visible") {
        list.style.visibility = "hidden";
    } else
        list.style.visibility = "visible";
}
document.getElementById('menu').onclick = function() { changeVisibility('list-item'); }

// BÀI 5 ------------------------

// jquery có cách liên hệ class tương tự css
$(".Jquery").dblclick(function() {
    $(".Jquery").hide();
})

$(".Jquery").click(function() {
    $("span").css({
        "background": "black",
        "color": "white",
        "margin": "10px",
        "font-size": "2rem",
        "font-family": "'Courier New', Courier, monospace"
    });

})