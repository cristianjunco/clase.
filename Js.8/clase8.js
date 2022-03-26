const hamburguesa =[{
    carne: 'carne',
    aderezo: 'con aderezo',
    precio: 220
}
];
 function getDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(hamburguesa);

        }, 6000);
    });
}
 getDatos().then((hamburguesa) => console.log(hamburguesa))