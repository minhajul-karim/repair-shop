import Link from "next/link";

export default function Home() {
  return (
    <section 
      className="w-full h-dvh bg-gray-900 bg-center bg-cover flex justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/home_hero.jpg')"
      }}
    >
      <div className="text-white bg-black w-fit p-10 flex flex-col gap-4">
        <h1 className="text-4xl">Minhajul Karim</h1>
        <address className="text-xl">
          Munshi Bari <br />
          Noorpur chowmuhony <br />
          Cumilla City Corporation
        </address>
        <Link className="text-xl" href="tel:01711091062">01711091062</Link>
      </div>
    </section>
  );
}
