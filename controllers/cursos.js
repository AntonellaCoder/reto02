let arrayCursos = [];
let index = 1;

function list() {
  return arrayCursos;
}

// Create
function create(x) {
  const registro = {
    id: index,
    nombre: x.nombre,
    descripcion: x.descripcion,
    precio: x.precio,
  };
  arrayCursos.push(registro);
  index += 1;
  return registro;
}

// Read
function read(idDetail) {
  const detalleCurso = arrayCursos.find((elem) => elem.id === idDetail);
  return detalleCurso;
}

// Update
function update(anId, reqBody) {
  const object = arrayCursos.find((element) => element.id === anId);
  object.nombre = reqBody.nombre;
  object.descripcion = reqBody.descripcion;
  object.precio = reqBody.precio;
  return object;
}

// Delete
function delet(iddFromPath) {
  arrayCursos = arrayCursos.filter((element) => element.id !== iddFromPath);
  return { mensaje: 'mensaje eliminado' };
}

// Update
module.exports = {
  list,
  create,
  read,
  update,
  delet,
};
