
function mudar() {
    var body = document.getElementById('body')
    var img1 = document.getElementById('dark')
    var img2 = document.getElementById('light')
    var font = document.getElementById('lucca')

    if (body.classList.contains('light')) {

        body.classList.remove('light')
        body.classList.add('dark')

        img1.classList.add('cor_img')
        img2.classList.add('cor_img')

        font.classList.add('cor_font')


    } else {

        body.classList.remove('dark')
        body.classList.add('light')

        img1.classList.remove('cor_img')
        img2.classList.remove('cor_img')

        font.classList.remove('cor_font')

    }


}