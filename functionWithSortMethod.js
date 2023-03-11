function sortBy(array, order) {
    if(order = "Asc"){
        return array.sort((item, value) => (item > value? 1: -1 ))
    }else if(order = "Desc"){
        return array.sort((item, value) => (item > value? -1: 1 ))
    }
}

const array = [7, 1, 11, 66]
console.log(sortBy(array, "Ask"))