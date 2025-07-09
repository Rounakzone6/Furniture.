import {
  faCcVisa,
  faGoogle,
  faGooglePay,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center border-gray-300 shadow  border p-2 rounded-lg">
        <p className="text-xs md:text-lg">
          <FontAwesomeIcon icon={faPaypal} /> Paypal
        </p>
        <p className="text-[10px] md:text-sm">
          <FontAwesomeIcon icon={faLink} /> Link Account
        </p>
      </div>
      <div className="flex justify-between items-center border-gray-300 shadow  border p-2 rounded-lg">
        <p className="text-xs md:text-lg">
          <FontAwesomeIcon icon={faGoogle} /> Paypal
        </p>
        <p className="text-[10px] md:text-sm">
          <FontAwesomeIcon icon={faLink} /> Link Account
        </p>
      </div>
      <div className="flex justify-between items-center border-gray-300 shadow  border p-2 rounded-lg">
        <p className="text-xs md:text-lg">
          <FontAwesomeIcon icon={faCcVisa} /> Paypal
        </p>
        <p className="text-[10px] md:text-sm">
          <FontAwesomeIcon icon={faLink} /> Link Account
        </p>
      </div>
      <form action="" className="border text-sm md:text-lg p-2 flex flex-col gap-2 border-gray-300 shadow rounded-lg">
        <p>
          <FontAwesomeIcon icon={faCreditCard} /> Add New Credit/Debit Card
        </p>
        <div className="flex gap-1 flex-col">
          <p>
            Card Holder Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="Holder Name"
            className="px-2 py-1 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p>
            Card Number<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="cardNumber"
            placeholder="0000-0000-0000-0000"
            className="px-2 py-1 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-1 flex-col">
            <p>
              Expiry Date<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="expDate"
              placeholder="02/30"
              className="px-2 py-1 w-57 border-gray-400 rounded-full border"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p>
              CVV<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="cvv"
              placeholder="000"
              className="px-2 py-1 border-gray-400 w-57 rounded-full border"
            />
          </div>
        </div>
        <p>
          <input type="checkbox" />
          Save card for future payments
        </p>
        <button
          type="submit"
          className="bg-[#224A26] font-medium text-white rounded-full my-4 py-2 px-4"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
