import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";

const Dashboard = async () => {
  const user = await currentUser();
  console.log(user?.id);
  return (
    <MaxWidthWrapper>
      <div className="mt-20 flex justify-between items-center border-b border-gray-300 pb-6">
        <h1 className="text-4xl font-bold">My Files</h1>
        <Button>Upload Files</Button>
      </div>

      <ul className="files-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 divide-y divide-zinc-200 mt-8">
        <li className="box col-span-1 bg-white min-h-[300px] divide-y divide-gray-200 rounded-lg shadow transition hover:shadow-lg"></li>
      </ul>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
