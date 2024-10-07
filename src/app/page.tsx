import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
      <div className="w-12">
        <Image src="/logo.svg" alt="Merge" width={100} height={100} className="w-full" />
      </div>
      <div className="w-32">
        <Image src="/logotype.svg" alt="Merge" width={100} height={100} className="w-full" />
      </div>
      <div className="border border-reve rounded-full overflow-hidden">
        <Link href="" className="outline-none bg-white border-r border-reve px-2 py-1 text-reve hover:text-white hover:bg-reve focus:text-white focus:bg-reve transition-colors duration-200 ease-in-out">Instagram</Link>
        <Link href="" className="outline-none bg-white border-r border-reve px-2 py-1 text-reve hover:text-white hover:bg-reve focus:text-white focus:bg-reve transition-colors duration-200 ease-in-out">Twitter</Link>
        <Link href="" className="outline-none bg-white px-2 py-1 text-reve hover:text-white hover:bg-reve focus:text-white focus:bg-reve transition-colors duration-200 ease-in-out">YouTube</Link>
      </div>
      <div className="w-96">
        <Image src="/indoor.svg" alt="" width={100} height={100} className="w-full" />
      </div>
    </div>
  );
}