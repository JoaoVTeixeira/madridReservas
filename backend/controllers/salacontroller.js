const Sala = require("../models/salas.js");

exports.getSala = async (req, res) => {
  try {
    const salas = await Sala.SalaModel.find();
    res.json(salas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSalaId = async (req, res) => {
  try {
    res.status(201).json(await Sala.SalaModel.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSala = async (req, res) => {
  try {
    res.status(201).json(await Sala.SalaModel.create(req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSala = async (req, res) => {
  try {
    res
      .status(201)
      .json(await Sala.SalaModel.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSala = async (req, res) => {
  try {
    res.status(201).json(await Sala.SalaModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
