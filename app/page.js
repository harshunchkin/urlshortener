import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <div className=" bg-[#F8FAFC] h-[calc(100vh-44px)] ">
        <div className="flex flex-col m-auto items-center w-2/3 text-center gap-12">
        <h1 className="p-10 text-center text-2xl ">
          Shorten and customize links within a second!
        </h1>
          <p className=" text-xl">
            Shorten lengthy URLs into concise, easy-to-share links. Whether
            you're sharing on social media, email, or any platform, our tool
            helps you save space, track link performance, and make your links
            memorable. With a sleek, user-friendly design and powerful
            functionality, managing your links has never been easier.
          </p>
          <Link className="" href={"/features"}>
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-[#BCCCDC] hover:border-[#BCCCDC] hover:text-[#BCCCDC]focus:outline-none focus:border-blue-600 focus:text-[#BCCCDC] disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-[#BCCCDC] dark:hover:border-[#9AA6B2] dark:focus:text-[#9AA6B2] dark:focus:border-[#9AA6B2]"
            >
              Try Now
            </button>
          </Link>
          <div className="flex gap-4 p-4 *:m-auto">
            <h2>Quickly transform long URLs into short, shareable links</h2>
            <h2>Create personalized short links for better branding</h2>
            <h2>Shorten as many URLs as you need without restrictions</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
