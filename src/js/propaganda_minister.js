const propagandaMessages = [
    "π³οΈββ§οΈπ³οΈββ§οΈ Trans right are human rights. π³οΈββ§οΈπ³οΈββ§οΈ",
    "π³οΈββ§οΈπ³οΈββ§οΈ Trans women are women. π³οΈββ§οΈπ³οΈββ§οΈ",
    "π³οΈββ§οΈπ³οΈββ§οΈ Trans men are men. π³οΈββ§οΈπ³οΈββ§οΈ",
    "Software is like sex, it's better when its free! Β¬βΏΒ¬\"",
    "π³οΈβππ³οΈβπ Bi rights are human rights. ( ΰΉβΎΜβ‘βΎΜ)(βΎΜβ‘βΎΜ ΰΉ)",
    "No shame in sucking dick as boy! (ββΏβ)",
    "π³οΈβππ³οΈβπ gay rights are human rights π³οΈβππ³οΈβπ",
    "π³οΈβππ³οΈβπ lesbian rights are human rights π³οΈβππ³οΈβπ",
    "666 > 88"
]

const copyrightElem = document.getElementById("copyright");

function getRandomListElem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

copyrightElem.innerText = getRandomListElem(propagandaMessages);

copyrightElem.addEventListener("click", function () {
    console.log("clicked on propaganda");

    var answer = window.confirm("Leftist propaganda? Yes. Deal with it snowflake! βοΈ\n\nPress OK to deal with it and accept the gay as human.")
    if (!answer) {
        setTimeout(function () {
            console.log("redirecting to /pol/");
            window.location.href = "https://twitter.com/";
            // window.location.replace("https://boards.4chan.org/pol/");
        }, 2000);
        window.alert("Wow you really are a snowflake!βοΈ\n\nI will soon redirect you to a place, where you can go cry about me...");
    }
})
