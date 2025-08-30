import heroImage from "@/assets/hero-img-1.png";
import BlurText from "@/components/TextAnimations/BlurText/BlurText";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FlowingMenu from "@/components/Components/FlowingMenu/FlowingMenu.tsx";
import {Divider} from "@heroui/divider";
import {Image} from "@heroui/image";
import Table from "@/components/table";

const menuItems = [
  { link: '#', text: 'home', image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxob21lfGVufDB8fDB8fHww' },
  { link: '/skills', text: 'skills', image: 'https://images.unsplash.com/photo-1599837487527-e009248aa71b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '/projects', text: 'projects', image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const achievementItems = [
    "Juara 1 FLS2N 2024 Jenjang SMA/MA Cabang Instrumen Solo: Gitar Tingkat Provinsi Riau",
    "Juara 2 FLS2N 2023 Jenjang SMA/MA Cabang Instrumen Solo: Gitar Tingkat Provinsi Riau",
    "Peringkat 9 OSN 2024 Jenjang SMA/MA Bidang Informatika Tingkat Provinsi Riau",
    "Juara 2 Lomba Video Semarak LCTP 2023 Tingkat Provinsi Riau",
    "Peringkat 4 Tryout UTBK GAMAFTR (Gadjah Mada Flies to Riau) 2025"
]

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center md:text-right justify-center">
          <h1 className={title({ class: "font-instrument-serif italic"})}>
            <BlurText
                text="salam kenal"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center justify-center align-middle md:justify-end"
            />
          </h1>
          <div className={subtitle({ class: "mt-4 text-md px-5 md:px-0" })}>
            Namaku <strong>Mohammad Zidane Kurnianto</strong>. Karena nama <strong>Zidane </strong>
             itu komoditas panas, kalian bisa memanggil aku:
          </div>
          <span className={`${title()} font-ms-madi`}>
            -Zika-
          </span>
        </div>

        <div className="w-full flex justify-center items-center mx-[5%]">
            <Image
                src={heroImage}
                alt="Portrait of Zika"
                className="w-[80%] max-w-[400px] lg:max-h-[80vh] object-contain hover:scale-105"
                removeWrapper={true}
            />
        </div>
      </section>

        <Divider className="my-8" />

      <section className="my-3">
        <h2 className={title({ class: "text-center text-3xl font-instrument-serif italic w-full block"})}>
          sekilas tentang saya
        </h2>
          <Table items={achievementItems} />
        <div className={subtitle({ class: "my-4 text-md px-5 text-center" })}>
          <p>
            Saya sedang menempuh pendidikan<strong> Sarjana Sistem Informasi di Universitas Indonesia</strong>.
            Dengan antusiasme yang kuat terhadap membangun sistem dan berinovasi di medan teknologi,
            saya berharap dapat berkontribusi secara signifikan di bidang ini, terutama di bidang
            <strong> Software Development</strong>.
          </p>
        </div>
      </section>

      <Divider className="my-8" />

      <section className="my-3">
        <h2 className={title({ class: "text-center text-3xl font-instrument-serif italic w-full block md:hidden"})}>
          kenalan lebih lanjut?
        </h2>
          <div className="w-full sm:my-5 grid grid-cols-1 md:grid-cols-2 ">
            <iframe
                src="https://www.instagram.com/reel/DNWGXsXTsVI/embed"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                title="Instagram Reel"
                className="w-full rounded-lg shadow-2xl hover:scale-95 transition-all flex-1 mx-auto aspect-[9/16] max-w-[350px]"
            />
              <div className="hidden md:flex flex-col justify-center items-center w-full mt-2 flex-1">
                  <h2 className={title({ class: "text-center text-3xl font-instrument-serif italic w-full my-5"})}>
                      kenalan lebih lanjut?
                  </h2>
                  <div className="flex opacity-40">
                      <svg className="transform-[scaleX(-1)] flex-1" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 190.285"><path fill="currentColor" d="M512 62.269c-32.208 3.503-65.126 11.155-82.935 11.576-5.87.14-13.175-.651-5.825-3.929 17.743-7.915 39.85-13.415 61.461-14.291-4.787-1.077-9.548-2.473-15.993-4.683-42.916-14.717-91.165-23.694-138.308-23.756-39.015-.053-79.822 5.737-115.535 22.126 13.263 12.299 25.007 25.723 35.154 40.787 21.629 32.107 31.567 79.665-13.75 96.773-37.675 14.221-72.262-18.318-76.731-54.787-3.222-26.29 6.915-45.475 19.352-63.408 5.258-7.581 11.717-14.262 19.168-20.104C105.119-16.905 17.276 26.293 0 117.511 4.91 5.165 125.544-21.164 205.932 42.942c70.469-46.003 210.713-30.084 282.411 7.501-9.463-9.291-17.535-22.446-22.866-35.006-.79-1.859-4.569-8.993-4.29-12.878.102-1.443.766-2.442 2.348-2.553.903-.063 1.863.407 2.868 1.35 2.92 2.749 9.199 13.053 15.44 23.057C491.104 39.255 499.115 50.13 512 62.269zm-304.367-6.573c13.918 12.907 26.764 28.048 37.028 43.982 16.542 25.678 22.453 56.275-1.472 72.95-14.806 10.319-30.931 9.682-44.76 1.389-49.808-29.871-25.747-96.994 9.204-118.321z"/></svg>
                      <span className="text-4xl ml-5 italic font-bold flex-2">check it out!</span>
                  </div>
              </div>
          </div>
      </section>

        <Divider className="my-8" />

      {/* Deep Dive */}
      <section className="my-3">
        <h2 className={title({ class: "text-center text-3xl font-instrument-serif italic w-full block"})}>
          eksplorasi?
        </h2>
        <div className="my-3 not-dark:bg-foreground rounded-md shadow-2xl">
          <FlowingMenu items={menuItems} />
        </div>
      </section>
    </DefaultLayout>
  );
}
