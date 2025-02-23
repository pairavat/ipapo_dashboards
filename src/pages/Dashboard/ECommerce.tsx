import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import SalesPieChart from "../../components/ecommerce/SalesPieChart";

export default function Ecommerce() {
  return (
    <>
      <PageMeta
        title="iPAPO"
        description=""
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceMetrics />
        </div>

        <div className="col-span-4">
          <SalesPieChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <MonthlyTarget />
        </div>

        <div className="col-span-6">
          <StatisticsChart />
        </div>

        <div className="col-span-6 xl:col-span-6">
          <DemographicCard />
        </div>

        {/* <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div> */}
      </div>
    </>
  );
}
