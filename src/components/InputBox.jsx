import { useId } from "react";
import PropTypes from "prop-types";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountdisable = false,
  currencydisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount Input Section */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          disabled={amountdisable}
        />
      </div>

      {/* Currency Selector Section */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 inline-block w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencydisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// PropTypes Definitions
InputBox.propTypes = {
  label: PropTypes.string.isRequired, // Label for the input field
  amount: PropTypes.number, // The numerical amount value
  onAmountChange: PropTypes.func.isRequired, // Function to handle changes to the amount
  onCurrencyChange: PropTypes.func.isRequired, // Function to handle changes to the currency
  currencyOptions: PropTypes.arrayOf(PropTypes.string), // List of available currency options
  selectCurrency: PropTypes.string, // The selected currency
  amountdisable: PropTypes.bool, // Whether the amount input is disabled
  currencydisable: PropTypes.bool, // Whether the currency selector is disabled
  className: PropTypes.string, // Additional classes for styling
};

// Default Props Definitions
InputBox.defaultProps = {
  amount: 0, // Default amount is 0 if not provided
  currencyOptions: [], // Default to an empty array if no currency options are provided
  selectCurrency: "usd", // Default selected currency is "usd"
  amountdisable: false, // Amount input is enabled by default
  currencydisable: false, // Currency selector is enabled by default
  className: "", // No additional classes by default
};

export default InputBox;
