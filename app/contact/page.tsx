import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-2">
      <div className="text-lg text-green-700">Contact Page</div>
      <Image
        src={
          "https://images.unsplash.com/photo-1757258632083-e9b8a5345047?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="contact Image"
        width={500}
        height={500}
      />
    </div>
  );
}
