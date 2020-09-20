$(document).ready(function() {
    $('.choices').click(function() {
        var input = document.getElementsByClassName('filter')
        var categories = []

        for(i = 0; i < 8; i++) {
            if(input[i].checked === true) {
                categories.push(input[i].value)
            }
        }
        
        // console.log(categories)
        $.post('/filter', {categories: categories}, function(){})
    })
})