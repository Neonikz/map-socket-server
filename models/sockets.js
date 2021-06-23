const Markers = require("./marker-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.markers = new Markers();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //Enviar los marcadores activos
            socket.emit('active-markers', this.markers.actives );

            //Añadir marcadores
            socket.on( 'new-marker', marker => {
                this.markers.addMarker( marker );

                //Emitimos el socket a todos los clientes exceptuando al socket actual
                socket.broadcast.emit('new-marker', marker);
            });

            //Actualizar marcadores
            socket.on('update-marker', marker => {
                this.markers.updateMarker( marker );
                socket.broadcast.emit('update-marker', marker);
            });


            
        
        });
    }


}


module.exports = Sockets;