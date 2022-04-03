const convertDate = (t: Date) => {
  const date = `0${t.getDate()}`.slice(-2);
  const month = `0${t.getMonth() + 1}`.slice(-2);
  const year = t.getFullYear();
  return `${date}.${month}.${year}`;
};

export default convertDate;
