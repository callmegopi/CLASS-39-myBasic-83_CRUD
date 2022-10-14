var sectionElement = document.createElement("section")
sectionElement.setAttribute("id", "slider")
var anchorElement = document.createElement("a")
var imgElement = document.createElement("img")
imgElement.setAttribute("src", "./images/960x280.gif")
anchorElement.appendChild(imgElement)
sectionElement.appendChild(anchorElement)

document.getElementById("container").appendChild(sectionElement)


// ==================== HOME PAGE =================
var sectionElement = document.createElement("section")
sectionElement.setAttribute("id", "services")
sectionElement.setAttribute("class", "clear")


// ============= home page for look =====================
for (i = 0; i < 4; i++) {
    var articleElement = document.createElement("article")
    articleElement.setAttribute("class", "one_quarter")

    var figureElement = document.createElement("figure")
    var imgElement_2 = document.createElement("img")
    imgElement_2.setAttribute("src", "./images/32x32.gif")
    figureElement.appendChild(imgElement_2)

    var header = document.createElement("strong")
    header.innerHTML = "Lorum Ipsum Dolor"

    var para = document.createElement("p")
    para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."

    var para_2 = document.createElement("p")
    para_2.setAttribute("class", "more")
    var anchor_2 = document.createElement("a")
    anchor_2.setAttribute("href", "#")
    anchor_2.innerHTML = "read More &raquo;"
    para_2.appendChild(anchor_2)

    articleElement.appendChild(figureElement)
    articleElement.appendChild(header)
    articleElement.appendChild(para)
    articleElement.appendChild(para_2)
    sectionElement.appendChild(articleElement)
    document.getElementById("homepage").appendChild(sectionElement)
}

// ============== section last clear ===============
var section_last = document.createElement("section")
section_last.setAttribute("class", "last clear")

var article_2 = document.createElement("article")
article_2.setAttribute("class", "three_quarter")

var head_2 = document.createElement("h2")
head_2.innerHTML = "Lorum Ipsum Dolor"

var para_3 = document.createElement("p")
para_3.innerHTML = "This is a W3C compliant free website template from <a href=https://www.os-templates.com/ title=Free Website Templates>OS Templates</a>. For full terms of use of this template please read our <a href=https://www.os-templates.com/template-terms>website template licence</a>."

var para_3_1 = document.createElement("p")
para_3_1.innerHTML = "You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more HTML5 templates visit <a href=https://www.os-templates.com/>free website templates</a>."

var footerElement = document.createElement("footer")
footerElement.setAttribute("class", "more")
var anchor_3 = document.createElement("a")
anchor_3.setAttribute("href", "#")
anchor_3.innerHTML = "Read More &raquo;"
footerElement.appendChild(anchor_3)

article_2.appendChild(head_2)
article_2.appendChild(para_3)
article_2.appendChild(para_3_1)
article_2.appendChild(footerElement)

section_last.appendChild(article_2)
document.getElementById("homepage").appendChild(section_last)

// ========================= section lastbox ===================
var article__3 = document.createElement("article")
article__3.setAttribute("class", "one_quarter lastbox")

var header2 = document.createElement("h2")
header2.innerHTML = "Lorum Ipsum Dolor"

var para_4 = document.createElement("p")
para_4.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem."

var footerElement_2 = document.createElement("footer")
footerElement_2.setAttribute("class", "more")
var anchor_4 = document.createElement("a")
anchor_4.setAttribute("href", "#")
anchor_4.innerHTML = "Read More »"
footerElement_2.appendChild(anchor_4)

article__3.appendChild(header2)
article__3.appendChild(para_4)
article__3.appendChild(footerElement_2)

section_last.appendChild(article__3)

// ==================== footer section ===================

