import React from 'react';
import { CircleSlash, Package, PackageCheck, AlertTriangle } from 'lucide-react';

// Enhanced interface for inventory items
interface InventoryItem {
  id: number;
  name: string;
  variants: string;
  category: string;
  price: string;
  image: string;
  inStock: number;
  assigned: number;
  status: "Available" | "Low Stock" | "Assigned" | "Overdue";
}

// Custom Badge component
const Badge = ({ children, color }: { children: React.ReactNode; color: "success" | "warning" | "primary" | "error" }) => {
  const colorClasses = {
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

// Sample inventory data
const inventoryData: InventoryItem[] = [
  {
    id: 1,
    name: "MacBook Pro 13",
    variants: "2 Variants",
    category: "Laptop",
    price: "$2399.00",
    inStock: 15,
    assigned: 5,
    status: "Available",
    image: "/images/product/product-01.jpg",
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    category: "Watch",
    price: "$879.00",
    inStock: 3,
    assigned: 12,
    status: "Low Stock",
    image: "/images/product/product-02.jpg",
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "SmartPhone",
    price: "$1869.00",
    inStock: 25,
    assigned: 8,
    status: "Available",
    image: "/images/product/product-03.jpg",
  },
  {
    id: 4,
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Electronics",
    price: "$1699.00",
    inStock: 0,
    assigned: 7,
    status: "Overdue",
    image: "/images/product/product-04.jpg",
  },
  {
    id: 5,
    name: "AirPods Pro 2nd Gen",
    variants: "1 Variant",
    category: "Accessories",
    price: "$240.00",
    inStock: 8,
    assigned: 3,
    status: "Assigned",
    image: "/images/product/product-05.jpg",
  },
];

// Calculate summary statistics
const getTotalItems = () => {
  return inventoryData.reduce((sum, item) => sum + item.inStock + item.assigned, 0);
};

const getTotalInStock = () => {
  return inventoryData.reduce((sum, item) => sum + item.inStock, 0);
};

const getTotalAssigned = () => {
  return inventoryData.reduce((sum, item) => sum + item.assigned, 0);
};

const getTotalOverdue = () => {
  return inventoryData.filter(item => item.status === "Overdue").length;
};

export default function InventoryManagement() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Items Card */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-white/[0.03]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Items</p>
              <h4 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{getTotalItems()}</h4>
            </div>
            <Package className="h-8 w-8 text-[#465fff]" />
          </div>
        </div>

        {/* In Stock Card */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-white/[0.03]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">In Stock</p>
              <h4 className="mt-2 text-2xl font-bold text-green-600">{getTotalInStock()}</h4>
            </div>
            <PackageCheck className="h-8 w-8 text-green-600" />
          </div>
        </div>

        {/* Assigned Card */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-white/[0.03]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Assigned</p>
              <h4 className="mt-2 text-2xl font-bold text-[#465fff]">{getTotalAssigned()}</h4>
            </div>
            <CircleSlash className="h-8 w-8 text-[#465fff]" />
          </div>
        </div>

        {/* Overdue Card */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-white/[0.03]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Overdue</p>
              <h4 className="mt-2 text-2xl font-bold text-red-600">{getTotalOverdue()}</h4>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Inventory List
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-[#465fff] bg-[#465fff] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#3449db]">
              + Add Item
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              Export
            </button>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-y border-gray-100 dark:border-gray-800">
                <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Products</th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Category</th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">In Stock</th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Assigned</th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {inventoryData.map((item) => (
                <tr key={item.id}>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                        <img
                          src={item.image}
                          className="h-[50px] w-[50px] object-cover"
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-800 dark:text-white/90">
                          {item.name}
                        </p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.variants}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.category}
                  </td>
                  <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.inStock}
                  </td>
                  <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.assigned}
                  </td>
                  <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                    <Badge
                      color={
                        item.status === "Available"
                          ? "success"
                          : item.status === "Low Stock"
                          ? "warning"
                          : item.status === "Assigned"
                          ? "primary"
                          : "error"
                      }
                    >
                      {item.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}