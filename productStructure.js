const products = [
    "preto-PP",
    "preto-M",
    "preto-G",
    "preto-GG",
    "preto-GG",
    "branco-PP",
    "branco-G",
    "vermelho-M",
    "azul-XG",
    "azul-XG",
    "azul-XG",
    "azul-P",
];

function countItems(arr) {
    let colors = {}

    for (const element of arr) {
        let splits = element.split('-')
        if(!colors[splits[0]]){
            colors[splits[0]] = {}

            if(!colors[splits[0]][splits[1]]){
                colors[splits[0]][splits[1]] = 1
            }
            else{
                colors[splits[0]][splits[1]] += 1
            }
        }
        else{
            if(!colors[splits[0]][splits[1]]){
                colors[splits[0]][splits[1]] = 1
            }
            else{
                colors[splits[0]][splits[1]] += 1
            }
        }
    }

    return colors;
}



module.exports = () => {
    // Código aqui
    return countItems(products)
};
