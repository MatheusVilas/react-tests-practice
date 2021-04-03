import React, { useState } from "react";

const Form: React.FC = () => {
  const [error] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />

        <button type="submit">send</button>

        <div data-testid="error-wrap">{error && <p>{error}</p>}</div>
      </form>
    </div>
  );
};

export default Form;
