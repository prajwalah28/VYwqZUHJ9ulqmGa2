import React, { useState } from "react";

export const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (
      !isNaN(weightValue) &&
      !isNaN(heightValue) &&
      weightValue >= 1.0 &&
      weightValue <= 300.0 &&
      heightValue >= 0.1 &&
      heightValue <= 3.0
    ) {
      const bmiResult = (weightValue / Math.pow(heightValue, 2)).toFixed(1);
      setBMI(bmiResult);
    } else {
      setBMI(null);
    }
  };

  return (
    <div>
      <h1>BMI </h1>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="0.1"
            min="1.0"
            max="300.0"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Height (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step="0.01"
            min="0.1"
            max="3.0"
            required
          />
        </label>
      </div>
      <div>
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      {bmi !== null && (
        <div>
          <p>BMI: {bmi}</p>
        </div>
      )}
    </div>
  );
};
