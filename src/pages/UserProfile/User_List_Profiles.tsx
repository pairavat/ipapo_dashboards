import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import UserAddressCard from "../../components/UserProfile/UserAddressCard";
import UserInfoCard from "../../components/UserProfile/UserInfoCard";
import UserMetaCard from "../../components/UserProfile/UserMetaCard";
import { useParams } from "react-router";

export default function UserListProfiles() {

  const { id } = useParams();
  console.log(id , "in use list");
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="User profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          User Profile 
        </h3>
        <div className="space-y-6">
          <p>HI theres</p>
          <UserMetaCard ids={id}/>
          <UserInfoCard ids={id}/> 
          <UserAddressCard ids={id} />
        </div>
      </div>
    </>
  );
}
