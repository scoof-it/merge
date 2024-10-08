import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-20 border-t py-10 bg-gray-50">
            <div className="md:container mx-5 md:mx-auto flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-3/4">
                    <div>
                        <Link href="/">
                            <Image src="/logotype.svg" alt="Merge" width={100} height={100} className="w-20" />
                        </Link>
                        <p className="mt-2 ">&copy; 2024 scoof.</p>
                    </div>
                    <div className="md:hidden" />
                    <div>
                        <h2 className="font-bold text-lg mb-2">Legal</h2>
                        <ul className="space-y-2 link-focus">
                            <li>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Link 1</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Link 2</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Link 3</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-2">About</h2>
                        <ul className="space-y-2 link-focus">
                            <li>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Link 1</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Link 2</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Link 3</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}