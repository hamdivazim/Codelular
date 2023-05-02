function update() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;

    if (html == "") {
        html = '<img src="assets/logo.png" style="height:2em;">'
    }

    let doc = "<!DOCTYPE html>" + html + "<style>" + css + "</style><script>" + js +"</script>";

    let iframe = document.getElementById("iframe-viewer").contentWindow.document;

    iframe.open();
    iframe.write(doc);
    iframe.close();
}

function switchToHTML() {
    document.getElementsByClassName("active")[0].className = "inactive";
    document.getElementById("htmltab").className = "active";

    document.getElementsByClassName("showed")[0].className = "hidden";
    document.getElementById("html").className = "code-input showed";
}

function switchToCSS() {
    document.getElementsByClassName("active")[0].className = "inactive";
    document.getElementById("csstab").className = "active";

    document.getElementsByClassName("showed")[0].className = "hidden";
    document.getElementById("css").className = "code-input showed";
}

function switchToJS() {
    document.getElementsByClassName("active")[0].className = "inactive";
    document.getElementById("jstab").className = "active";

    document.getElementsByClassName("showed")[0].className = "hidden";
    document.getElementById("js").className = "code-input showed";
}