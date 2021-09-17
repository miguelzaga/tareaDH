const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(arr){
        let string = JSON.stringify(arr)
        fs.writeFileSync(this.archivo, string)
    },    
    guardarTarea: function(obj) {
        let temp = this.leer()
        temp.push(obj)
        this.escribirJSON(temp);
    },
    filtrarPorEstado: function(estado){
        return this.leer().filter(function(obj){
            return obj.estado == estado; 
        })
    },
    imprimirTareas: function(obj){
        obj.forEach(function(elemento, indice){
            console.log(`${indice}. ${elemento.titulo} - ${elemento.estado}`)
        })
    },
    leerPorEstado: function(estado){
        this.imprimirTareas(this.filtrarPorEstado(estado));
        
    },
    constTarea: function(input){
        this.titulo = input,
        this.estado = "pendiente"
    }
}


module.exports = archivoTareas;