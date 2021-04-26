
// First Links Functions
function linkDropdown() {
    var boxOne = document.querySelector('.product-list');
    if (boxOne.style.display == 'block') {
        boxOne.style.display = 'none';
    } else {
        boxOne.style.display = 'block';
    }
}
function $arrowRotate() {
    var rotateOne = document.querySelector('.arrow-link');
    if (rotateOne.style.transform == 'rotate(180deg)') {
        rotateOne.style.transform = 'rotate(0deg)';
    }
    else {
        rotateOne.style.transform = 'rotate(180deg)';
    }
}
function arrowRotate() {
    var rotateOne = document.querySelector('.arrow-dark');
    if (rotateOne.style.transform == 'rotate(180deg)') {
        rotateOne.style.transform = 'rotate(0deg)';
    }
    else {
        rotateOne.style.transform = 'rotate(180deg)';
    }
}

// Second Link Functions
function linkDropdown2() {
    var boxTwo = document.querySelector('.company-list');
    if (boxTwo.style.display == 'block') {
        boxTwo.style.display = 'none';
    } else {
        boxTwo.style.display = 'block';
    }
}
function linkRotate2() {
    var rotateTwo = document.querySelector('.link-rotate2');
    if (rotateTwo.style.transform == 'rotate(180deg)') {
        rotateTwo.style.transform = 'rotate(0deg)';
    }
    else {
        rotateTwo.style.transform = 'rotate(180deg)';
    }
}
function arrowRotate2() {
    var rotateTwo = document.querySelector('.rotate2');
    if (rotateTwo.style.transform == 'rotate(180deg)') {
        rotateTwo.style.transform = 'rotate(0deg)';
    }
    else {
        rotateTwo.style.transform = 'rotate(180deg)';
    }
}

// Thrid Link Functions
function linkDropdown3() {
    var boxThree = document.querySelector('.connect-list');
    if (boxThree.style.display == 'block') {
        boxThree.style.display = 'none';
    } else {
        boxThree.style.display = 'block';
    }
}
function linkRotate3() {
    var rotateThree = document.querySelector('.link-rotate3');
    if (rotateThree.style.transform == 'rotate(180deg)') {
        rotateThree.style.transform = 'rotate(0deg)';
    }
    else {
        rotateThree.style.transform = 'rotate(180deg)';
    }
}
function arrowRotate3() {
    var rotateThree = document.querySelector('.rotate3');
    if (rotateThree.style.transform == 'rotate(180deg)') {
        rotateThree.style.transform = 'rotate(0deg)';
    }
    else {
        rotateThree.style.transform = 'rotate(180deg)';
    }
}

// Hamburger Open/Close Functions
function menuDisplay() {
     var open = document.querySelector('#mobileNav');
     if (open.style.display == 'block') {
        open.style.display = 'none';
     }
     else {
         open.style.display = 'block';
     }
}
function openMenu() {

    if (document.getElementById("close").src == "icon-close.svg") {
        document.getElementById("open").src = "icon-hamburger.svg";  
     }
    else {
        document.getElementById("close").src = "icon-close.svg";
        document.getElementById("close").style.display = 'block';
        document.getElementById('open').style.display = 'none';
     }
}
function closeMenu() {
    document.getElementById('open').style.display = 'block';
    document.getElementById('close').style.display = 'none';
}

// MOBILE DROPDOWN!
function linkDropdownMob() {
    var boxOne = document.querySelector('.product-mobile');
    if (boxOne.style.display == 'block') {
        boxOne.style.display = 'none';
    } else {
        boxOne.style.display = 'block';
    }
}

function arrowRotateMob() {
    var rotateOne = document.querySelector('.arrow-mobile');
    if (rotateOne.style.transform == 'rotate(180deg)') {
        rotateOne.style.transform = 'rotate(0deg)';
    }
    else {
        rotateOne.style.transform = 'rotate(180deg)';
    }
}
// Second Link Functions
function linkDropdownMob2() {
    var boxTwo = document.querySelector('.company-mobile');
    if (boxTwo.style.display == 'block') {
        boxTwo.style.display = 'none';
    } else {
        boxTwo.style.display = 'block';
    }
}

function arrowRotateMob2() {
    var rotateTwo = document.querySelector('.arrow-mobile2');
    if (rotateTwo.style.transform == 'rotate(180deg)') {
        rotateTwo.style.transform = 'rotate(0deg)';
    }
    else {
        rotateTwo.style.transform = 'rotate(180deg)';
    }
}

// Thrid Link Functions
function linkDropdownMob3() {
    var boxThree = document.querySelector('.connect-mobile');
    if (boxThree.style.display == 'block') {
        boxThree.style.display = 'none';
    } else {
        boxThree.style.display = 'block';
    }
}
function arrowRotateMob3() {
    var rotateThree = document.querySelector('.arrow-mobile3');
    if (rotateThree.style.transform == 'rotate(180deg)') {
        rotateThree.style.transform = 'rotate(0deg)';
    }
    else {
        rotateThree.style.transform = 'rotate(180deg)';
    }
}