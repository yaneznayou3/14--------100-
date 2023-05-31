let json = [
    {
        'src':'https://basket-10.wb.ru/vol1402/part140268/140268231/images/c516x688/1.jpg',
        'price':'$199.00'
    },
    {
        'src':'https://basket-04.wb.ru/vol714/part71412/71412499/images/c516x688/1.jpg',
        'price':'$149.00'
    },
    {
        'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ke5yf7P2EJBfrhSwaM481vpNlBZIkUNa8g&usqp=CAU',
        'price':'$99.00'
    },
    {
        'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVt_rzO-XKBFuE1m1ME-SNRBtoS0dNQtG2g&usqp=CAU',
        'price':'$49.00 '
    }
]

console.log(json)

window.onload = () => {
    let mainCont1 = document.querySelector('#main-cont1-c2')

    const addItem = () => {
        let template = document.querySelector('#item')
        json.map(jsonItem => {
            let { src, price } = jsonItem;
            let item = template.cloneNode(true);
            item.querySelector('img').src = src;
            item.querySelector('h3').innerText = price;
            mainCont1.append(item);
        
        });
    }
    addItem()
}
