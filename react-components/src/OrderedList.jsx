function OrderedList(data) {
  return (
    <div>
      <hr />
      <ol>
        <li>{data.item1}</li>
        <li>{data.item2}</li>
        <li>{data.item3}</li>
        <li>{data.item4}</li>
      </ol>
      <hr />
    </div>
  );
}

export default OrderedList;
