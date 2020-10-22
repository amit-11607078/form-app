import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function NameForm() {
  const [username, setUsername] = useState("amit");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("a@j.c");
  const [phone, setPhone] = useState("1234567890");
  const [error, setError] = useState("");
  const history = useHistory();

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    var result;
    const calculate_age = (date) => {
      var newdate = new Date(date);
      var diff_ms = Date.now() - newdate.getTime();
      var age_dt = new Date(diff_ms);

      result = Math.abs(age_dt.getUTCFullYear() - 1970);

      if (result >= 18) {
        setIsError(false);
        return setDate(date);
      } else {
        setDate("");
        setIsError(true);
      }
    };

    calculate_age(date);
  }, [date]);

  const handleErrors = async (response) => {
    if (!response.ok) {
      const { message } = await response.json();
      throw Error(message);
    }
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        date,
        email,
        phone,
      }),
    })
      .then(setError(""))
      .then(handleErrors)

      .then(history.push("/form-list"))

      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form className="form" onSubmit={async (e) => await handleSubmit(e)}>
      <label>Name:</label>
      <br />
      <input
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <label>Date:</label>
      <br />

      <input
        type="date"
        value={date}
        required
        onChange={(e) => {
          setDate(e.target.value);
        }}
      ></input>
      {isError && <span style={{ color: "red" }}>{"Wrong DOF"}</span>}
      <br />
      <label>Email:</label>
      <br />
      <input
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>
        <br />
        Phone Number:
      </label>
      <br />
      <input
        value={phone}
        type="tel"
        // pattern="[0-9]{10}"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}

      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
