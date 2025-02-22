import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import UserList from "../../components/user/UserList";
import UserAddressCard from "../../components/UserProfile/UserAddressCard";
import UserInfoCard from "../../components/UserProfile/UserInfoCard";
import UserMetaCard from "../../components/UserProfile/UserMetaCard";

export default function UserListPage() {
  return (
    <>
      <PageMeta
        title="React.js User List Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js User List Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="User List" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          UserList
        </h3>
        <div className="space-y-6">
          <UserList />
        </div>
      </div>
    </>
  );
}
