/*
 |********************************************************
 |  By Dhales Ribeiro
 |********************************************************
 | Usando Laravel Mix para processar arquivos finais
 |********************************************************
 */

const mix = require('laravel-mix');

// Diretório das vendors
const vendor = './node_modules/';

// Schedule com os Scripts
const vendorJs = [
    // Bootstrap
    `${vendor}bootstrap/dist/js/bootstrap.min.js`,
    `${vendor}bootstrap/dist/js/bootstrap.min.js.map`,
];

// Schedule com os CSS
const vendorCss = [
    // Bootstrap
    `${vendor}bootstrap/dist/css/bootstrap.min.css`,
    `${vendor}bootstrap/dist/css/bootstrap.min.css.map`,
];

// Schedule com as Imagens
const localImages = [
    './src/img/**',
];

// Schedule com as WebFonts
const localFonts = [
    './src/fonts/**',
];

// Schedule com Css local
const localCss = [
    './src/css/**',
];

// Processando Arquivos Finais
mix.copy(vendorJs, './public/js/');
mix.copy(vendorCss, './public/css/');
mix.copy(localImages, './public/img/');
mix.copy(localFonts, './public/fonts/');
mix.copy(localCss, './public/css/');