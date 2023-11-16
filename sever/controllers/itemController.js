let items = [
  { id: 1, name: "item1" },
  { id: 1, name: "item1" },
];
const itemController = {
  getAllItems: (req, res) => {
    res.send(items);
  },
  createItem: (req, res) => {
    const item = {
      id: items.length + 1,
      name: req.body.name,
    };
    items.push(item);
    res.status(201).json(item);
  },
  getItemById: (req, res) => {
    const item = items.find((i) => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("item dosnt found");
    res.json(item);
  },
  updateItem: (req, res) => {
    const item = items.find((i) => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("item dosnt found");
    item.name = req.body.name;
    res.send(item);
  },
  deleteItem: (req, res) => {
    const findItemIndex = items.findIndex(
      (element) => element.id === parseInt(req.params.id)
    );
    if (findItemIndex === -1) {
      res.status(400).send("element not found");
      return;
    }
    items.splice(findItemIndex, 1);
    res.send();
  },
};
module.exports = itemController;
