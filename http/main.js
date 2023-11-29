const getProduct = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
    const result = await response.json();
    result.map((el) => {
        let ele = document.createElement('img');
        ele.src = el.url; 
        ele.style.width = '100px';
        ele.style.height = '100px';
        document.body.append(ele);
    });
}
getProduct();