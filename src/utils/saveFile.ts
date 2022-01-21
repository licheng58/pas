

export const saveFile = (data: any, name: string) => {
  const newData = JSON.stringify(data);
  const tagA = document.createElement('a');
  tagA.download = name;
  tagA.style.display = 'none';
  const blob = new Blob([newData]);
  tagA.href = URL.createObjectURL(blob);
  document.body.appendChild(tagA);
  tagA.click();
  document.body.removeChild(tagA);
};
