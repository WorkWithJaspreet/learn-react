function BothList({ ulItem1, ulItem2, olItem1, olItem2 }) {
  return (
    <div>
      <hr />
      <ul>
        <li>{ulItem1}</li>
        <li>{ulItem2}</li>
      </ul>
      <ol>
        <li>{olItem1}</li>
        <li>{olItem2}</li>
      </ol>
      <hr />
    </div>
  );
}

export default BothList;
