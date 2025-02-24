import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  //   projectName: string;
  contact: string;
  //   team: string;
  status: string;
  //   budget: string;
  Email: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 0,
    user: {
      image: "/images/user/owner.jpg",
      name: "Lindsey Curtis",

      role: "Web Designer",
    },
    contact: "34567892",

    Email: "abcd@gmail.com",

    //   budget: "3.9K",
    status: "Active",
    //   team: ""
  },
  {
    id: 1,
    user: {
      image: "/images/user/user-01.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    contact: "34567892",
    Email: "abcd@gmail.com",
    //   budget: "24.9K",
    status: "Pending",

    //   team: ""
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-02.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    contact: "34567892",
    //   budget: "12.7K",
    status: "Active",
    Email: "abcd@gmail.com",
    //   team: ""
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-06.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    contact: "34567892",
    status: "Active",
    //   budget: "2.8k",
    Email: "abcd@gmail.com",
    //   team: ""
  },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     contact: "34567892",
//     //   budget: "2.8K",
//     status: "Cancel",
//     Email: "abcd@gmail.com",
//     //   team: ""
//   },
  {
    id: 4,
    user: {
      image: "/images/user/user-03.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    contact: "34567892",
    // team: {
    // //   images: [
    // //     "/images/user/user-31.jpg",
    // //     "/images/user/user-32.jpg",
    // //     "/images/user/user-33.jpg",
    // //   ],
    // },
    // budget: "4.5K",
    status: "Active",
    Email: "abcd@gmail.com",
    //   team: ""
  },
];

export default function UserList() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Name of Employee
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Contact
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Email
                </TableCell>{" "}
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
                {/* <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Budget
                </TableCell> */}
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img src={order.user.image} alt={order.user.name} />
                      </div>
                      <div>
                        <a href={`profile/${order.id}`}>
                          <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {order.user.name}
                          </span>
                        </a>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.user.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.contact}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.Email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.budget}
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
