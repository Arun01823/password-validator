
import React, { useState } from 'react';
import { getPasswordStrength } from '../utils/passwordStrength';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(getPasswordStrength(value));
  };

  return (
    <div>
      <h2>Password Validator</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        Password Strength: <span>{strength}</span>
      </div>
    </div>
  );
};

export default PasswordValidator;
