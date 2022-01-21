

export const readFile = (event: any) => {
  return new Promise((resolve) => {
    const { files } = event.target;
    if (files.length < 1) {
      return;
    }
    const file = files[0];
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      if (typeof this.result === 'string') {
        resolve(JSON.parse(this.result));
      }
    };
  });
};
