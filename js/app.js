requirejs.config({
    baseUrl: '../vendor',
    paths: {
        app: '../js/app'
        jquery: 'jquery/jquery'
    }
});

requirejs(['js/main']);
