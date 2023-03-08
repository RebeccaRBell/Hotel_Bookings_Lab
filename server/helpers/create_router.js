const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
    });
  });

  router.get('/:id', (req, res) => {
    console.log(ObjectID);
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
});

router.post('/', (req, res) => {
  const newBooking = req.body;
  collection.insertOne(newBooking)
  .then(data => res.json(data))
  .catch((error) => {
    console.error(error);
    res.status(500);
    res.json({status: 500, error: error});
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  collection.deleteOne({_id: ObjectID(id)})
  .then(data => res.json(data))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({status: 500, error: err})
  })
})
return router;
}

  module.exports = createRouter;