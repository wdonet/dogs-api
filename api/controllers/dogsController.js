const {
  get,
  getAll,
} = require('../services/dogService');

exports.listAll = async (req, res) => res.json(await getAll());

exports.getSingleDog = async (req, res) => {
  const { breed } = req.params || {};
  const singleDog = await get(breed);
  res.json(singleDog);
};
