const getColorBtn = document.querySelector('#get-color-btn')
const color = document.querySelector('#color')
const selectColor = document.querySelector('#select-color')
const hexColorList = document.querySelector('.hex-color-list')

getColorBtn.addEventListener("click", function () {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.substring(1)}&mode=${selectColor.value}&count=5`, options)
        .then(res => res.json())
        .then(d => {
            let html = ``
            d.colors.map(function (c) {
                html += `
                            <li class="hex-colors" style="background-color:${c.hex.value};"><p>${c.hex.value}</p></li>
                        `
            })
            hexColorList.innerHTML = html;
        })
})