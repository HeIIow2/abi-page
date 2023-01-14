import {setCookie, getCookie} from './cookies.js';


const colors = {
    "--bg-color": ["#121212", "#fff"],
    "--bg-1dp": ["#1e1e1e", "#f2f2f2"],
    "--bg-2dp": ["#222222", "#ededed"],
    "--bg-3dp": ["rgba(255, 255, 255, 0.08)", "rgba(0, 0, 0, 0.08)"],
    "--bg-4dp": ["rgba(255, 255, 255, 0.09)", "rgba(0, 0, 0, 0.09)"],

    "--main-text-color": ["#fff", "#000"],
    "--secondary-text-color": ["#aaa", "#333"],

    "--accent-color": ["#ffacf6", "#1f315b"],
    "--secondary-accent-color": ["#77a1fd", "#1d561e"],
    "--shadow-1dp": ["0 0 10px black", "0 0 0 2px var(--accent-color), 0 0 10px black"],
    "--shadow-2dp": ["0 0 20px black", "0 0 0 2px var(--accent-color), 0 0 20px black"],
    "--shadow-small": ["0 0 3px black", "0 0 0 1px var(--accent-color), 0 0 3px black"],
    "--negation": ["invert(1)", "None"],
}

const properties = Object.keys(colors);

function set_theme(theme_) {
    for (var i=0; i<properties.length; i++) {
        const propertie = properties[i]
        document.documentElement.style.setProperty(propertie, colors[propertie][theme_]);
    }
}

let theme;

let theme_str = getCookie("theme");
if (theme_str === "") {
    theme = 0;
    setCookie("theme", 0, 9999999);
} else {
    theme = parseInt(theme_str);
    set_theme(theme);
}

function toggle() {
    theme += 1;
    theme = theme % colors[properties[0]].length;

    set_theme(theme);
    setCookie("theme", theme, 9999999);
}

const themeButton = document.getElementById("theme-button");
themeButton.onclick = toggle;

export {toggle};