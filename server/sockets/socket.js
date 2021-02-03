const io = require('../server');


io.on('connection', (client) => {

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        msj: 'Bienvenido a esta app'
    })
    console.log('Usuario conectado');
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    })

    //Escuchar el cliente 
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // console.log(msj);
        // if (msj.usuario) {

        //     callback({
        //         res: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         res: 'Todo salio mal'
        //     })
        // }
    })

})