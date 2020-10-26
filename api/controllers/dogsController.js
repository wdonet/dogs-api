const {
  get,
  getAll,
} = require('../services/dogService');

exports.listAll = async (req, res) => res.status(200).json(await getAll());

exports.getSingleDog = async (req, res) => {
  const { breed } = req.params || {};
  const singleDog = await get(breed);
  res.status(200).json(singleDog);
};
