import { useState, useEffect } from "react";
// import "./order-list.css";

interface Order {
  _id: string;
  customerCode: string;
  amountTitle: string;
  totalAmount: number;
}

const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("localhost:2003/api/v1/order")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer name</th>
              <th className="px-4 py-2">Customer Adress</th>
              <th className="px-4 py-2">Customer PhoneNumber</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Customer Code</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-4 py-2">{order._id}</td>
                <td className="px-4 py-2">{order.amountTitle}</td>
                <td className="px-4 py-2">{order.totalAmount}</td>
                <td className="px-4 py-2">{order.customerCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
