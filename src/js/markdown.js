const markdownBoxList = document.getElementsByClassName("markdown");

const toc = document.getElementById("toc");
let toc_index = 1;


String.prototype.replaceAt = function(index, length, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + length);
}

for (let markdownBox of markdownBoxList) {
    let markdownSrc = markdownBox.getAttribute("src");

    if (!!markdownSrc) {
        // fetch markdown if src is found
        fetch(markdownSrc).then((response) => {
            response.text().then((text) => parseMd(markdownBox, text))
        })
    } else {
        parseMd(markdownBox, markdownBox.innerHTML);
    }
}

function getNewText() {
    let newElem = document.createElement("div");
    newElem.className = "text";

    return newElem
}

function addTOC(header) {
    if(!toc) {
        return;
    }
    if(toc.getAttribute("fill") === "false") {
        return;
    }

    console.log(header)
    console.log(header.textContent)

    let id_str = header.textContent;
    id_str = id_str.replace(" ", "-");
    id_str = id_str.toLowerCase();

    header.id = id_str;

    let newPoint = document.createElement("li");
    let newAnchor = document.createElement("a");
    newAnchor.href = "#" + id_str;
    newAnchor.text = toc_index.toString() + ". " + header.textContent;

    newPoint.appendChild(newAnchor);
    toc.appendChild(newPoint);

    toc_index++;
}

function parseMd(htmlElem, markdown) {
    let parsed = marked.parse(markdown);
    htmlElem.innerHTML = parsed;

    let textBoxList = []



    // parse tex formula
    let textNodeList = htmlElem.querySelectorAll("*");
    for (let textNode of textNodeList) {
        formulaSupport(textNode)
    }

    // move in blocks
    let newElem = getNewText();
    for (let child of htmlElem.childNodes) {
        if (child.tagName === "H1" || child.tagName === "h1") {
            newElem = getNewText();

            textBoxList.push(newElem);
            addTOC(child);
            document.body.insertBefore(newElem, htmlElem);

        }
        newElem.appendChild(child);
    }

}

function formulaSupport(node) {
    const inline_pattern = /\$([^\$]*)\$/g;
    const outline_pattern = /\$\$([^\$]*)\$\$/g;

    let text = node.innerHTML;

    let matches = []
    for (let input of text.matchAll(inline_pattern)) {matches.push(input);}
    for (let input of text.matchAll(outline_pattern)) {matches.push(input);}

    for (let input of matches.reverse()) {
        if (input[1] === '') {
            continue;
        }

        convert(node, input[0], input[1], true);
    }
}

function convert(render_node, raw_input, input, display) {
    MathJax.texReset();
    MathJax.tex2chtmlPromise(input, {display: display}).then(function (node) {
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
        render_node.innerHTML = render_node.innerHTML.replace(raw_input,node.innerHTML);
    }).catch(function (err) {
        render_node.innerHTML = render_node.innerHTML.replace(raw_input,err.message);
    }).then(function () {
    });
}