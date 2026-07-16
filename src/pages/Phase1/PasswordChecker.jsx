import { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const rules={
    hasMinLength:password.length>=8,
    hasUpperCase:/[A-Z]/.test(password),
    hasLowerCase:/[a-z]/.test(password),
    hasNumber:/\d/.test(password),
    hasSpecial:/[\W_]/.test(password)
  }
  const score  =Object.values(rules).filter(Boolean).length
  const getStrength=()=>{
    if(score<=2) return 'Weak';
    if(score<=4) return "Medium";
    return "strong"
  }

  return (
    <div>
      <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      {password && <div>{getStrength()}</div>}
      {!rules.hasMinLength && <div>Minimum 8 chars</div>}
      {!rules.hasUpperCase && <div>atleast 1 Lowercase char</div>}
      {!rules.hasLowerCase && <div>atleast 1 Uppercase char</div>}
      {!rules.hasSpecial && <div>atleast 1 Special char</div>}
      {!rules.hasNumber && <div>atleast 1 Number</div>}
    </div>
  );
};

export default PasswordChecker;
