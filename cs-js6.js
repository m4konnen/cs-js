document.addEventListener("DOMContentLoaded", function(event) {

var header = document.getElementsByTagName("header")[0].innerHTML;

    styles = document.getElementsByTagName("style")

    links = document.getElementsByTagName("link")

    all_links= "<div>"

    for (const element of links) {
        all_links += element.outerHTML
    }
    all_links+="</div>"
    

    all_styles= "<style>"

    for (const element of styles) {
        all_styles+=element.innerHTML
    }
    all_styles+="</style>"

    


var init ="PCFET0NUWVBFIGh0bWwKICAgIFBVQkxJQyAiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkIj4KPGh0bWwgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiPgoKPGhlYWQ+CiAgICA8dGl0bGU+YWNjZXNzIHNlYyBsYWItIGNzMS42PC90aXRsZT4KICAgICAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICAgICAgICBib2R5LAogICAgICAgICAgICBodG1sIHsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgIGhlYWRlcnsKaGVpZ2h0OiAxMCU7Cn0KCiAgIG1haW57CmhlaWdodDogOTAlOwp9CgojY29udGVudHsKaGVpZ2h0OiAxMDAlCn0KICAgICAgICA8L3N0eWxlPgo8L2hlYWQ+Cgo8Ym9keT4KPGhlYWRlcj4="
var medium = btoa(header.toString() + all_styles.toString() + all_links.toString())

console.log(medium);

var final ="PC9oZWFkZXI+CjxtYWluPgo8ZGl2IGlkID0iY29udGVudCI+CjxpZnJhbWUgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZnJhbWVib3JkZXI9IjAiIHNyYz0iaHR0cHM6Ly9wbGF5LWNzLmNvbS9wdC9zZXJ2ZXJzIiAvPgo8L2Rpdj4KPG1haW4+CjwvYm9keT4KCjwvaHRtbD4="


var pocpage = btoa(atob(init) + atob(medium) + atob(final))

document.open();

document.write(atob(pocpage));

document.close();

});
