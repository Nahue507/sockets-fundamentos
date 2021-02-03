var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos coneccion con el server');
})

socket.emit('enviarMensaje', {
    usuario: 'Nahuel',
    message: 'Texto de ejemplo'
}, function(res) {
    console.log('Respuesta server:', res);
});

socket.on('enviarMensaje', function(msj) {
    console.log('Servidor :', msj);
})