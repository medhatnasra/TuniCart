import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = {
    products: [
      {
        name: "Stylish Jacket",
        size: "M",
        color: "Black",
        price: 120,
        image: "https://picsum.photos/500/500?random=1",
      },
      {
        name: "Casual Sneakers",
        size: "42",
        color: "White",
        price: 75,
        image: "https://picsum.photos/500/500?random=2",
      },
    ],
    totalPrice: 195,
  };

  const navigate = useNavigate();

  const [CheckoutId, setCheckoutId] = useState(null);

  const [shippingAdress, setShippingAdress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handPaymentSuccess = () => {
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section  */}

      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4"> Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label className="block text-gray-700 ">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAdress.firstName}
                required
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <label className="block text-gray-700 ">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAdress.lastName}
                required
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              {" "}
              Adress
            </label>

            <input
              type="text"
              value={shippingAdress.address}
              onChange={(e) =>
                setShippingAdress({
                  ...shippingAdress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border  "
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4 ">
            <div className="">
              <label className="block text-gray-700 ">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAdress.city}
                required
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <label className="block text-gray-700 ">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAdress.postalCode}
                required
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              {" "}
              Country
            </label>

            <input
              type="text"
              value={shippingAdress.country}
              onChange={(e) =>
                setShippingAdress({
                  ...shippingAdress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border  "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              {" "}
              Phone
            </label>

            <input
              type="text"
              value={shippingAdress.phone}
              onChange={(e) =>
                setShippingAdress({
                  ...shippingAdress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border"
              required
            />
          </div>
          <div className="mt-6">
            {!CheckoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to payment
              </button>
            ) : (
              <button
                onClick={handPaymentSuccess}
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to payment
              </button>
            )}
          </div>
        </form>
      </div>
      {/* Right Section  */}
      <div className="bg-gray-50 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>

        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => {
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div className="">
                  <h3 className="text-md"> {product.name}</h3>
                  <div className="text-gray-500"> Size : {product.size} </div>
                  <div className="text-gray-500"> Color : {product.color} </div>
                </div>
              </div>
              <p className="text-xl"> {product.price?.toLocaleString()}</p>
            </div>;
          })}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>TND{cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>TND{cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
