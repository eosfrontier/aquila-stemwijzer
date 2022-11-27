export function sortArrDesc(array, key) {

    return array.sort((a, b) => {
        let firstKey = key ? a[key] : a
        let secondKey = key ? b[key] : b
        return secondKey < firstKey ? -1 : 1;
    })

}