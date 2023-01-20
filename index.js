const express = require('express');
const app = express();
app.use(express.json());
const port = 3000
const database = require('./db');
const Container = require('./crudContainer');
const Movement = require('./movimentacao');

app.post('/containers', async (req, res) => {
    console.log(req.body);
    const user = await Container.create(req.body);
    res.json(user);  
  });

app.get('/containers', async (req, res) => {
    await Container.sync();

    const findAllProd = await Container.findAll();
    res.send(findAllProd);   
});
app.delete('/containers/:id', async (req, res) => {
    await Container.destroy({where: {id: req.params.id}});
    res.status(200).send();
});
app.put('/containers/:id', async (req, res) => {
    const container = await Container.findByPk(req.params.id);
    container.update(req.body)
    res.status(200).send();
});
app.get('/containers/:id', async (req, res) => {
    const container = await Container.findByPk(req.params.id);
    res.json(container.Customer);  
  });

app.post('/movements', async (req, res) => {
    console.log(req.body);
    const user = await Movement.create(req.body);
    res.json(user);
});  
app.get('/movements', async (req, res) => {
    await Movement.sync();

    const findAll = await Movement.findAll({
        include: [{model: Container, required: true, atrributes: ['Customer', 'Container_number']}]
    });
    res.send(findAll);
});
app.delete('/movements/:id', async (req, res) => {
    await Movement.destroy({where: {id: req.params.id}});
    res.status(200);
});
app.put('/movements/:id', async (req, res) => {
    const Movement = await Movement.findByPk(req.params.id);
    Movement.update(req.body)
    res.status(200);
});
app.get('/movements/:id', async (req, res) => {
    const movements = await Movement.findByPk(req.params.id, {
    include: [{model: Container, required: true, atrributes: ['Customer', 'Container_number']}]
    });
    res.json(movements);  
  });
app.get('/report', async (req, res) => {
    const movements = await Movement.findByPk({
    include: ["Container"]
    })
    
    res.json(movements);  
  });

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`)
});