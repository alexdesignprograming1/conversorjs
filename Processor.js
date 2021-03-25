class Processor{
  static Process(data){
    const destroyLine = data.split("\n");
    let rows = [];

    destroyLine.forEach(row => {
      const arr = row.split(";");
      rows.push(arr)
    });

    return rows;
  }
}

module.exports = Processor;