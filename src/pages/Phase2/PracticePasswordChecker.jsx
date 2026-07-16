import { useState } from "react";

const PracticePasswordChecker = () => {
  const [password, setPassword] = useState("");
  const rules = {
    length: password.length >= 8,
    upperCase: /[A-Z]/.test(password),
    lowerCase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[\W_]/.test(password),
  };
  const score = Object.values(rules).filter(Boolean).length;
  const getStrength = () => {
    if (score <= 2) return "weak";
    if (score <= 4) return "medium";
    return "strong";
  };
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && <div>{getStrength()}</div>}
      {!rules.length && <div>Minimum 8 chars</div>}
      {!rules.upperCase && <div>atleast 1 Lowercase char</div>}
      {!rules.lowerCase && <div>atleast 1 Uppercase char</div>}
      {!rules.special && <div>atleast 1 Special char</div>}
      {!rules.number && <div>atleast 1 Number</div>}
    </div>
  );
};
export default PracticePasswordChecker;
