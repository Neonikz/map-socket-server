

class Markers {

    constructor(){
        this.actives = {};
    }

    //Añadir marcadores
    addMarker( marker ){
        this.actives[ marker.id ] = marker;
        return marker;
    }
    //Borrar marcadores
    removeMarker( id ){
        delete this.actives[ id ];
    }
    //Actualizar marcadores
    updateMarker( marker ){
        this.actives[ marker.id ] = marker;
    }


}


module.exports = Markers;