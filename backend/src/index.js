const express = require('express')

const api = express()

api.use(express.json())

api.post('/', (req, res) =>{

  const {ml_x, vl_x, ml_y, vl_y} = req.body
 
  const result_x = vl_x * (1000/ml_x)
  const result_y = vl_y * (1000/ml_y)


  if (result_x < result_y){
    const resultado = Number(result_x.toFixed(2))
    const pack_12 = Number((vl_x * 12).toFixed(2))
    const litros_12 = ml_x * 12
    const pack_15 = Number((vl_x * 15).toFixed(2))
    const litros_15 = ml_x * 15
    const pack_18 = Number((vl_x * 18).toFixed(2))
    const litros_18 = ml_x * 18
    res.json({
      cerveja_x: resultado,
      pack_12: pack_12,
      pack_15: pack_15,
      pack_18: pack_18,
      litros_12: litros_12,
      litros_15: litros_15,
      litros_18: litros_18,
    })
    
  }
  if (result_y < result_x){
    const resultado = Number(result_y.toFixed(2))
    const pack_12 = Number((vl_y * 12).toFixed(2))
    const litros_12 = ml_y * 12
    const pack_15 = Number((vl_y * 15).toFixed(2))
    const litros_15 = ml_y * 15
    const pack_18 = Number((vl_y * 18).toFixed(2))
    const litros_18 = ml_y * 18

    res.json({
      cerveja_y: resultado,
      pack_12: pack_12,
      pack_15: pack_15,
      pack_18: pack_18,
      litros_12: litros_12,
      litros_15: litros_15,
      litros_18: litros_18,
    })
  }  
})

api.get('/', (req, res) =>{})
api.put('/:id', (req, res) =>{})
api.delete('/:id', (req, res) =>{})

api.listen(3000, () => {
  console.log('✔ Server is Running')
})