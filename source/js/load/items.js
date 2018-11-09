const itemList={
  find(name) {
    var result = itemList.list.find(obj => {
      return obj["name"] === name;
    });
    return result;
  },
  type(type) {
    var result = itemList.list.filter(obj => {
      return obj["type"] === type;
    });
    return result;
  },
  log: {
    ol() {
      var types = ["Arme", "Divers", "Bouffe"];
      for (type of types) {
        console.log('%c' + type, 'font-weight: bold;');
        console.table(itemList.type(type));
      }
    },
    ul() {
      console.table(itemList.list);
    }
  },
  list: [
    {
      "name": "Branche",
      "type": "Arme",
      "poids": 5
    },
    {
      "name": "Epée",
      "type": "Arme",
      "poids": 7
    }
  ],
};
