import Link from "next/link";
import clientPromise from "@/lib/mongodb";

const Sidebar = async () => {
  const client = await clientPromise;
  const db = client.db("ShortMaster");
  const collection = await db.collection("url").find({}).toArray();
  const urls = JSON.stringify(collection);
  

  return (
    <div className=" w-[300px]  bg-[#F8FAFC] border-r-2 border-[#5A6C57]  h-[calc(100vh)]">
      <Link href={"/"}><div className="p-2 text-xl font-bold text-[#49535f]">ShortMaster</div></Link>
      <div className="text-center my-2 ">
        {/* <input
          type="text"
          placeholder="Search URls"
          className="p-2 w-[90%] rounded-full"

        /> */}
        <div className="border-[1px] m-auto w-[90%]"></div>
      </div>
      <h2 className="text-xl p-2 font-semibold text-[#5b626a]">Recent Links</h2>
      <div className="overflow-y-scroll h-[calc(100vh-106px)] overflow-x-clip [&::-webkit-scrollbar]:w-2 
        [&::-webkit-scrollbar-track]    :bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        {collection.map(
          (item) => (
            console.log(item.url),
            (
              <div className="w-[280px] p-2 mb-2">
                <div className="bg-[#BCCCDC] hover:bg-[#bcccdccb] p-2 rounded-lg cursor-pointer">
                  <div className=" w-full" id={item.url}>
                    {item.url}
                  </div>
                  <div className="w-full" id={item.shorturl}>
                    {item.shorturl}
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
