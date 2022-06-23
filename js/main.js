// Selectors

let root = document.querySelector(':root');

let nums = document.querySelector('.num');

let toggle = document.querySelector('.toggle');

let keypad = document.querySelector('.number-container');

let screen = document.querySelector('.screen .text');

let currentColor;

if (localStorage.getItem('theme')) {
    currentColor = localStorage.getItem("theme");
    CorrectTheme(currentColor);
} else {
    currentColor = "theme1";
}

let pass = true;

let passOp = true;


// Set Main Variables
function SettingRootColors() {
    if (currentColor === 'theme1') {
        root.style.cssText = "--MainBackground: hsl(222, 26%, 31%); --TextColor1: hsl(0, 0%, 100%); --TextColor2: hsl(221, 14%, 31%); --TextColor3: hsl(0, 0%, 100%); --TextColor4: hsl(0, 0%, 100%); --ScreenBakcground: hsl(224, 36%, 15%); --ToggleBtnBackground: hsl(223, 31%, 20%); --KeyBackground1: hsl(30, 25%, 89%); --ColorShadow1: hsl(28, 16%, 65%); --KeyBackground2: hsl(225, 21%, 49%); --ColorShadow2: hsl(224, 28%, 35%); --KeyBackground3: hsl(6, 63%, 50%); --ColorShadow3: hsl(6, 70%, 34%);";
    } else if (currentColor === 'theme2') {
        root.style.cssText = "--MainBackground: hsl(0, 0%, 90%); --TextColor1: hsl(60, 10%, 19%); --TextColor2: hsl(60, 10%, 19%); --TextColor3: hsl(0, 0%, 100%); --TextColor4: hsl(0, 0%, 100%); --ScreenBakcground: hsl(0, 0%, 93%); --ToggleBtnBackground: hsl(0, 5%, 81%); --KeyBackground1: hsl(45, 7%, 89%); --ColorShadow1: hsl(35, 11%, 61%); --KeyBackground2: hsl(185, 42%, 37%); --ColorShadow2: hsl(185, 58%, 25%); --KeyBackground3: hsl(25, 98%, 40%); --ColorShadow3: hsl(25, 99%, 27%);";
    } else if (currentColor === 'theme3') {
        root.style.cssText = "--MainBackground: hsl(268, 75%, 9%); --TextColor1: hsl(52, 100%, 62%); --TextColor2: hsl(52, 100%, 62%); --TextColor3: hsl(0, 0%, 100%); --TextColor4: hsl(0deg 0% 27%); --ScreenBakcground: hsl(268, 71%, 12%); --ToggleBtnBackground: hsl(268, 71%, 12%); --KeyBackground1: hsl(268, 47%, 21%); --ColorShadow1: hsl(290, 70%, 36%); --KeyBackground2: hsl(281, 89%, 26%); --ColorShadow2: hsl(285, 91%, 52%); --KeyBackground3: hsl(176, 100%, 44%); --ColorShadow3: hsl(177, 92%, 70%);";
    }
}
SettingRootColors();

// Assign Switch 
nums.addEventListener('click', (e) => {
    if (e.target.classList.contains('1')) {
        currentColor = "theme1";
        localStorage.setItem('theme', currentColor);
    }else if (e.target.classList.contains('2')) {
        currentColor = "theme2";
        localStorage.setItem('theme', currentColor);
    }else if (e.target.classList.contains('3')) {
        currentColor = "theme3";
        localStorage.setItem('theme', currentColor);
    }
    CorrectTheme(currentColor)
    SettingRootColors();
})

// 
function CorrectTheme(currentColor) {
    if (currentColor === 'theme1') {
        toggle.style.left = "3px";
    }
    if (currentColor === 'theme2') {
        toggle.style.left = "30px";
    }
    if (currentColor === 'theme3') {
        toggle.style.left = "57px";
    }
}

// Keypad buttons
keypad.addEventListener('click', (e) => {

    //
    if (e.target.classList.contains('number')) {
        if (screen.innerHTML === '0') {
            screen.innerHTML = '';
        }
        screen.innerHTML = screen.innerHTML + e.target.innerHTML;
        passOp = true;
    }
    
    //
    if (e.target.classList.contains('point')) {
        if (pass) {
            screen.innerHTML = screen.innerHTML + e.target.innerHTML;
            pass = false;
        }
    }
    
    // 
    if (e.target.classList.contains('op')) {
        if (screen.innerHTML !== '0' && passOp && !screen.innerHTML.endsWith('.')) {
            screen.innerHTML = `${screen.innerHTML} ${e.target.innerHTML} `;
            pass = true;
            passOp = false;
        }
    }

    //
    if (e.target.classList.contains('delete')) {
        if (screen.innerHTML.length > 1) {
            if (screen.innerHTML.endsWith(' ')) {
                screen.innerHTML = screen.innerHTML.slice(0, -2);
            } else {
                screen.innerHTML = screen.innerHTML.slice(0, -1);
            }
        } else if (screen.innerHTML.length == 1) {
            screen.innerHTML = '0';
        }
    }

    //
    if (e.target.classList.contains('reset')) {
        screen.innerHTML = '0';
    }

    // 
    if (e.target.classList.contains('equal')) {
        screen.innerHTML = eval(screen.innerHTML);
    }

})


