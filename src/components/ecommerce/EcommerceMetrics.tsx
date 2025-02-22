import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxCubeIcon,
  BoxIconLine,
  ChevronDownIcon,
  GroupIcon,
  PieChartIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:py-3 px-7">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-6 space-y-6 xl:col-span-6">
            <GroupIcon className="text-blue-800 size-6 dark:text-white/90" />
          </div>

          <div className="col-span-6 space-y-6 xl:col-span-6 text-gray-400">
            <span className="text-sm float-right flex items-center">This Week {/*<ChevronDownIcon />*/}</span>
          </div>
        </div>

        {/* <div>
          This Week <ChevronDownIcon />
        </div> */}

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Check-Ins
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              512
              <Badge color="success">
                <ArrowUpIcon />
                18%
              </Badge>
            </h4>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              No Show
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              88
              <Badge color="success">
                <ArrowDownIcon />
                7%
              </Badge>
            </h4>
          </div>
          {/* <div>
            <Badge color="success">
              <ArrowUpIcon />
              11.01%
            </Badge>
          </div> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:py-3 px-7">
        <div className="col-span-6 space-y-6 xl:col-span-6">
          <PieChartIcon className="text-blue-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Ongoing Projects
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              13
              {/* <Badge color="success">
                <ArrowUpIcon />
                18%
              </Badge> */}
            </h4>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Sales Visits
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              36
              {/* <Badge color="success">
                <ArrowDownIcon />
                7%
              </Badge> */}
            </h4>
          </div>
          {/* <div>
            <Badge color="success">
              <ArrowUpIcon />
              11.01%
            </Badge>
          </div> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:py-3 px-7">
        <div className="col-span-6 space-y-6 xl:col-span-6">
          <BoxCubeIcon className="text-blue-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Inventory Count
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              500
              {/* <Badge color="success">
                <ArrowUpIcon />
                18%
              </Badge> */}
            </h4>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Issued
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              311
              {/* <Badge color="success">
                <ArrowDownIcon />
                7%
              </Badge> */}
            </h4>
          </div>
          {/* <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Sales Visits
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              36
            </h4>
          </div> */}
          {/* <div>
            <Badge color="success">
              <ArrowUpIcon />
              11.01%
            </Badge>
          </div> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
