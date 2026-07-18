import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] pt-32 pb-20 bg-[#E6E6E6]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-light mb-4">404</h1>
        <div className="border-t border-black my-4"></div>
        <p className="text-lg md:text-xl mb-8">
          This page doesn&apos;t exist.
        </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Back to home →
        </Link>
      </div>
    </div>
  );
}
