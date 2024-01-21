import { LoremIpsum } from 'lorem-ipsum';

const generarLoremIpsum = function (n = 1) {
    const lorem = new LoremIpsum();
    return lorem.generateSentences(n);
}

const generarNumeroRandom = function (min, max, decimales = 2) {
    const numeroAleatorio = Math.random() * (max - min) + min;
    return parseFloat(numeroAleatorio.toFixed(decimales));
}

const articulos = [
    { type: '3d', link: "/3d/che/scene.gltf", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/imagenes/OCbVA2ySCvGcDNsvvKMrJ.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/4xp4_gQGkuZ1-gjCZkD-e.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/bOHFJR7lDqvbv74Gcgj5u.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/CBPkCJ_HkQ-m4vERWmU63.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/Gg02s9Pbs2cIJlnwg5B12.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/xlltq0Rqbg7-Sa5Ae7aWA.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/imagenes/rSzNIZkPXLYsH-QHdCSmi.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/4xp4_gQGkuZ1-gjCZkD-e.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/bOHFJR7lDqvbv74Gcgj5u.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/CBPkCJ_HkQ-m4vERWmU63.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/Gg02s9Pbs2cIJlnwg5B12.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/xlltq0Rqbg7-Sa5Ae7aWA.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/imagenes/TYKfvDM8MJN-hnC33GMGV.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/4xp4_gQGkuZ1-gjCZkD-e.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/bOHFJR7lDqvbv74Gcgj5u.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) },
    { type: 'img', link: "/comics/CBPkCJ_HkQ-m4vERWmU63.png", price: generarNumeroRandom(100, 1000), description: generarLoremIpsum(), title: generarLoremIpsum().split(' ').slice(0, 2).join(' '), cantidad: generarNumeroRandom(10, 100, 0) }
];

export const Helper = {
    articulos: articulos,
    generarLoremIpsum: generarLoremIpsum,
    generarNumeroRandom: generarNumeroRandom,
};
