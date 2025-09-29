import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-2">
      <div className="text-lg text-red-700 mb-4">Home Page</div>
      <Image src={"next.svg"} alt="next image" width={200} height={40} />
    </div>
  );
}
