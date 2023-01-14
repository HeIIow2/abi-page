const propagandaMessages = [
    "🏳️‍⚧️🏳️‍⚧️ Trans right are human rights. 🏳️‍⚧️🏳️‍⚧️",
    "🏳️‍⚧️🏳️‍⚧️ Trans women are women. 🏳️‍⚧️🏳️‍⚧️",
    "🏳️‍⚧️🏳️‍⚧️ Trans men are men. 🏳️‍⚧️🏳️‍⚧️",
    "Software is like sex, it's better when its free! ¬‿¬\"",
    "🏳️‍🌈🏳️‍🌈 Bi rights are human rights. ( ๑‾̀◡‾́)(‾̀◡‾́ ๑)",
    "No shame in sucking dick as boy! (≖‿≖)",
    "🏳️‍🌈🏳️‍🌈 gay rights are human rights 🏳️‍🌈🏳️‍🌈",
    "🏳️‍🌈🏳️‍🌈 lesbian rights are human rights 🏳️‍🌈🏳️‍🌈"
]

const copyrightElem = document.getElementById("copyright");

function getRandomListElem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

copyrightElem.innerText = getRandomListElem(propagandaMessages);

copyrightElem.addEventListener("click", function () {
    console.log("clicked on propaganda");

    var answer = window.confirm("Leftist propaganda? Yes. Deal with it snowflake! ❄️\n\nPress OK to deal with it and accept the gay as human.")
    if (!answer) {
        setTimeout(function () {
            console.log("redirecting to /pol/");
            window.location.replace("https://boards.4chan.org/pol/");
        }, 2000);
        window.alert("Wow you really are a snowflake!❄️\n\nI will soon redirect you to a place, where you can go cry about me...");
    }
})
