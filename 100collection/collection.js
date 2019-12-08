const filters = document.getElementById('filters').getElementsByTagName('a');
const fonts = document. getElementById('fonts'). getElementsByTagName('li');


for (let i = 0; i < filters.length; i++){
    const filter = filters [i];
    filter.addEventListener('click', function(e){
        e.preventDefault();
        filterFonts(e.target.getAttribute('data-filter'));
    }

    );
};

filterFonts = function(filterClass){
    for (let i =0; i<fonts.length; i++){
        if(!fonts[i].classList.contains(filterClass)){
            fonts[i].classList.add('hide');
        } else{
            fonts[i].classList.remove('hide');
        }
    }
}
