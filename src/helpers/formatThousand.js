export default (number = 0) => {
  const thousand = new Intl.NumberFormat();
  return thousand.format(number);
};

//import formatThousand from "src/helpers/formatThousand";

//{formatThousand(item.name)}
