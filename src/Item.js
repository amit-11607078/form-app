import React, { useState } from "react";

function Item(props) {
  const [data, setData] = useState(props.data);

  // cosnt { username, date, email, phone } = data;

  return (
    <div className="form">
      <label>Name:</label>
      <br />
      <input readOnly type="text" required value={data.username} />

      <br />
      <label>Date:</label>
      <br />
      <input readOnly type="text" required value={data.date} />

      <br />
      <label>Email:</label>
      <br />
      <input readOnly type="email" value={data.email} required />

      <label>
        <br />
        Phone Number:
      </label>
      <br />
      <input
        readOnly
        value={data.phone}
        type="tel"
        // pattern="[0-9]{10}"
        required
      />

      <br />

      <input readOnly type="button" value="Submitted" />
    </div>
  );
}

export default Item;
