const {
    getCars
} = require('../utils/carsLogic');

exports.getgetCars = (req, res) => {
    const { placa, codigo_local, marca, modelo, tipo_vehiculo, color, pasajeros, tarifa_alquiler, cant_puertas, potencia_motor, capacidad_maletas, transmision, edad_minima, aire_acond, cod_categoria, tipo_gasolina, ruta_img } = req.body;
    const resultt = calculateCompoundInterest(placa, codigo_local, marca, modelo, tipo_vehiculo, color, pasajeros, tarifa_alquiler, cant_puertas, potencia_motor, capacidad_maletas, transmision, edad_minima, aire_acond, cod_categoria, tipo_gasolina, ruta_img);
    res.json({ value: resultt.toFixed(2) });
};