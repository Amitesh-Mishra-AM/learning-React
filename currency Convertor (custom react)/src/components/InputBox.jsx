import React,{useId} from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[], //it's an empty array becuase if user forgets to give an array then also the site will not crash
    selectCurrency="usd", // by defualt value
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
    const amountInputId=useId() // will generate unque id for each input 
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                        htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // we are using && just to check is it is available or not and the site does not crashes if it's not available

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                        {/*using for loop to show each and every currency value */}
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
