import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Image} from "@heroui/image";
import {Accordion, AccordionItem} from "@heroui/accordion";
import { PythonIcon, CppIcon, ReactIcon, FlutterIcon } from "@/components/icons.tsx";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import {Card, CardHeader, CardFooter} from "@heroui/card";
import MediaThemeTailwindAudio from 'player.style/tailwind-audio/react';
import FlowingMenu from "@/components/Components/FlowingMenu/FlowingMenu.tsx";
import {Divider} from "@heroui/divider";
import BlurText from "@/components/TextAnimations/BlurText/BlurText.tsx";
import CircularGallery from '@/components/Components/CircularGallery/CircularGallery'

const menuItems = [
    { link: '#programming', text: '#programming', image: 'https://images.unsplash.com/photo-1711346105258-bbb9136592d7?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { link: '#photography', text: '#photography', image: 'https://images.unsplash.com/photo-1652115741265-cc75910d391f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5hbG9nJTIwY2FtZXJhfGVufDB8fDB8fHww' },
    { link: '#music', text: '#music', image: 'https://images.unsplash.com/photo-1699797401383-c605f83114aa?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { link: '#videography', text: '#videography', image: 'https://images.unsplash.com/photo-1619099619226-f96e319e3732?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const albumItems = [
    {
        image: "/carousel-1.jpg",
        text: ""
    },
    {
        image: "/carousel-2.jpg",
        text: ""
    },
    {
        image: "/carousel-4.jpg",
        text: ""
    },
    {
        image: "/carousel-6.png",
        text: ""
    },
    {
        image: "/carousel-5.jpg",
        text: ""
    },
    {
        image: "/carousel-3.jpg",
        text: ""
    }
];

export default function SkillsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center md:py-3 lg:py-5">
          <h1 className={title({ class: "font-instrument-serif italic leading-5" })}>
              <BlurText
                  text="jack of all trades,"
                  delay={150}
                  animateBy="words"
                  direction="top"
              />
              <br/>
              <span className="text-gray-500 opacity-40">
                  <BlurText
                      text="master of none?"
                      delay={150}
                      animateBy="words"
                      direction="bottom"
                  />
              </span>
          </h1>
        </div>
          <div>
              <p className={subtitle({class: "text-center text-foreground-500"})}>
                  Saya berharap <strong>tidak begitu</strong>, ya. Saya percaya dengan menyeimbangkan
                  keterampilan akademik dan nonakademik, saya dapat menjadi individu yang
                  <strong> lebih baik dan berkontribusi secara positif kepada masyarakat</strong>.
              </p>
          </div>
      </section>
        <section className="not-dark:bg-foreground rounded-md shadow-2xl dark:opacity-80">
            <FlowingMenu items={menuItems} />
        </section>

        <Divider className="my-8" />

        {/* Programming Section */}
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" id="programming">
            <div className="w-full">
                <h2 className="text-center text-3xl font-instrument-serif italic leading-tight lg:text-4xl">
                    saya <span className="line-through text-red-400">pro</span>grammer.
                </h2>

                {/* Accordion */}
                <div id="programmingAccordion">
                <Accordion fullWidth={true} className="w-full">
                    <AccordionItem key="pythonItem" aria-label="Python" title="2023 - Tiada Rumah Seperti Python" indicator={<PythonIcon />}>
                        Saya memulai perjalananku di dunia pemrograman di Python saat saya duduk di bangku kelas
                        10 SMA. Perjalananku dimulai layaknya banyak orang: <strong>video YouTube dan sebuah buku tebal</strong>.
                        Di mataku, <span className="italic">coding</span> adalah hal yang jauh dari kata familier.
                        Melihat proyek-proyekku pada masa-masa ini akan terjamin membuat Anda <strong>mual</strong>.
                    </AccordionItem>
                    <AccordionItem key="cppItem" aria-label="C++" title="2024 - Toxic Relationship dengan C++" indicator={<CppIcon />}>
                        Walaupun saya akui bahwa saya sering berkelahi dengan C++ (ahem, <span className="italic">compiler error</span>),
                        beralih kapal dari Python ke C++ tidak sesusah yang saya bayangkan.
                        Saya mengikuti perlombaan <strong>OSN Informatika</strong> dengan pengalaman <span className="italic">competitive programming</span> yang tidak lebih dari setengah tahun.
                        Dari sana, saya menyadari bahwa <strong>saya terlambat belajar pemrograman</strong>.
                    </AccordionItem>
                    <AccordionItem key="webItem" aria-label="React" title="2025 - Javascript untuk Segala-galanya" indicator={<ReactIcon />}>
                        Sebelum terjun ke dunia perkuliahan, saya ingin menjadi <strong>sesuatu</strong>.
                        Meskipun sekarang saya bisa mengatakan bahwa saya cukup mahir dalam Python dan C++,
                        saya <strong>hanya bisa mengaplikasikan mereka sebatas menyelesaikan permasalahan LeetCode</strong>.
                        Setelah berdebat dengan diri sendiri, saya memutuskan untuk mendalami <strong>Frontend Web Development </strong>
                        di waktu luangku.
                    </AccordionItem>
                    <AccordionItem key="upcomingItem" aria-label="Flutter" title="???? - Selanjutnya Apa?" indicator={<FlutterIcon />}>
                        Saya sudah mendaftarkan diri di sebuah Bootcamp <strong>Flutter
                        untuk Mobile Development</strong>. Serta, untuk menunjang skill Frontend-ku,
                        saya juga sedang melirik ke bidang <strong>UI/UX Design dengan Figma</strong>.
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
        </section>

        <Divider className="my-8" />

        {/* Photography Section */}
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" id="photography">
            <div>
                <h2 className="text-center text-3xl font-instrument-serif italic leading-tight lg:text-4xl">
                    ini bukan <span className="font-ms-madi text-4xl lg:text-5xl">Louvre</span>.
                </h2>
                <div className={subtitle({class: "hidden mt-4 text-md px-5 text-center"})}>
                    <p>
                        Saya mulai memegang DSLR <strong>di bangku kelas 11 SMA</strong> (lebih tepatnya 2023).
                        Selama 2 tahun ini, saya telah mengumpulkan <strong>banyak potret yang kubanggakan</strong>.
                    </p>
                </div>
            </div>
            <div style={{ height: '300px', position: 'relative', width: '100%' }} className="inset-shadow-sm bg-gray-100 dark:bg-gray-800 dark:inset-shadow-gray-900 rounded-lg">
                <CircularGallery bend={-1} textColor="currentColor" borderRadius={0.05} scrollEase={0.02} items={albumItems}/>
                <p className="text-center opacity-20 text-tiny mt-1 italic font-bold">Spin Me!</p>
            </div>
            <div className={subtitle({class: "mt-4 text-md text-center"})}>
                <p>
                    Saya mulai memegang DSLR <strong>di bangku kelas 11 SMA</strong> (lebih tepatnya 2023).
                    Selama 2 tahun ini, saya telah mengumpulkan <strong>banyak potret yang kubanggakan</strong>.
                </p>
            </div>
        </section>

        <Divider className="my-8" />

        {/* Music Section */}
        <section id="music" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:flex-row">
            <div className="md:flex-1 md:order-last">
                <h2 className="text-center text-3xl font-instrument-serif italic leading-tight lg:text-4xl md:text-left">
                    saya bukan <span className="font-ms-madi text-4xl lg:text-5xl">Mozart</span>.
                </h2>
                <div className={subtitle({class: "hidden md:block mt-4 text-md text-center md:text-left"})}>
                    <p>
                        Percaya atau tidak, saya tidak memiliki ketertarikan kepada segala hal
                        yang berbau musik sebelum menggenggam gitar. Itupun setelah les gitar setahun,
                        saya tidak terlalu interested jika topik musik diangkat. Namun, <strong>semuanya berawal
                        dari masa-masa karantina Covid-19</strong>. Entah seberapa lama saya habiskan untuk berlatih
                        gitar karena tidak ada hal lain yang bisa (atau ingin) kulakukan. Pada akhirnya,
                        <strong>saya masih bukan Mozart</strong>. Akan tetapi, setidaknya <strong>saya bisa menilai diriku cukup jago</strong> dalam
                        memainkan instrumen ini.
                    </p>
                </div>
            </div>
            <div className="w-full aspect-video flex-1">
                <iframe src="https://www.youtube.com/embed/AIddeN76sEE?si=GSkCZwGTlAmCLX6U"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                >
                </iframe>
            </div>
            <div className={subtitle({class: "mt-4 text-md text-center md:hidden    "})}>
                <p>
                    Percaya atau tidak, saya tidak memiliki ketertarikan kepada segala hal
                    yang berbau musik sebelum menggenggam gitar. Itupun setelah les gitar setahun,
                    saya tidak terlalu interested jika topik musik diangkat. Namun, <strong>semuanya berawal
                    dari masa-masa karantina Covid-19</strong>. Entah seberapa lama saya habiskan untuk berlatih
                    gitar karena tidak ada hal lain yang bisa (atau ingin) kulakukan. Pada akhirnya,
                    <strong> saya masih bukan Mozart</strong>. Akan tetapi, setidaknya <strong>saya bisa menilai diriku cukup jago</strong> dalam
                    memainkan instrumen ini.
                </p>
            </div>
        </section>

        {/* Music Subsection */}
        <section className="flex items-center justify-center pb-8 md:pb-10">
            <div className="max-w-[750px] flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
                <div>
                    <h3 className="text-center text-2xl lg:text-3xl font-instrument-serif italic leading-tight sm:text-right sm:mt-7">
                        absolute cinema.
                    </h3>
                    <div className={subtitle({class: "mt-4 text-md text-center max-w-[640px] sm:text-right"})}>
                        <p>
                            Saya <strong>pernah menapaki dunia produksi musik dan komposisi musik</strong>.
                            Salah satu proyek saya adalah membuat soundtrack untuk <strong>film pendek
                            untuk perlombaan FLS2N</strong> yang berjudul <Link isExternal showAnchorIcon href="https://youtu.be/m5vVJDBIpWY?si=e_yDZFrNO1ogl0R0">
                            Benang Ibu</Link>.
                        </p>
                    </div>
                </div>
                <div className="max-w-[300px]">
                    <Image src="/benang-ibu-ac.jpg" alt="Benang Ibu movie poster" width={600} isBlurred className="w-full rounded-lg mb-4 shadow-lg"/>
                    <MediaThemeTailwindAudio style={{width: "100%"}} className="w-full">
                        <audio
                            slot="media"
                            src="/audio/murai-sutra.mp3"
                            crossOrigin="anonymous"
                            aria-hidden
                        >
                            <track kind="captions" label="Instrumental - no captions" />
                        </audio>
                    </MediaThemeTailwindAudio>
                    <span className="text-gray-500 opacity-40 text-sm italic text-center w-full block mt-2">
                        <strong>{`"Murai Sutra"`}</strong> dari Benang Ibu (2024)
                    </span>
                </div>
            </div>
        </section>

        <Divider className="my-8" />

        {/*  Filmography Section  */}
        <section id="videography" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:text-4xl">
            <div>
                <h2 className="text-center text-3xl font-instrument-serif italic leading-tight lg:text-4xl">
                    ini bukan <span className="font-ms-madi text-4xl lg:text-5xl">Hollywood</span>.
                </h2>
                <div className={subtitle({class: "hidden mt-4 text-md px-5 text-center"})}>
                    <p>
                        Hobi mengedit aku bermula dari karantina <strong>Covid-19</strong> (ya, sama seperti perjalanan gitarku).
                        Saya sempat mempunyai kanal YouTube gaming yang <strong>cukup sukses</strong>. Kanal itu sudah lama
                        ditinggalkan oleh saya, tetapi bagi yang kepo, dipersilakan mencari kanal atas nama <strong>@Sharkfin07</strong>.
                    </p>
                </div>
            </div>
            <div className="gap-2 grid grid-cols-12 grid-rows-1 px-8">
                <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7 hidden sm:block shadow-md h-[400px]">
                    <Image
                        removeWrapper
                        alt="Gerhana short film thumbnail"
                        className="z-0 h-full w-full justify-center align-middle object-cover"
                        src="https://img.youtube.com/vi/lC8GfqM7iag/maxresdefault.jpg"
                        isBlurred
                    />
                    <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div className="pr-2">
                            <p className="text-tiny text-white/60">Sebuah proyek film pendek yang saya sutradarai sebagai tugas akhir pelajaran Informatika di SMA.</p>
                        </div>
                        <Button className="text-tiny w-auto font-bold" variant="shadow" radius="full" size="sm" as={Link} href="https://youtu.be/lC8GfqM7iag?si=1pJMK7OQOcUhbppE">
                            Tonton
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 md:h-[400px]">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="DIY craft reels thumbnail"
                        className="z-0 w-full h-full object-cover"
                        src="/cmb-thumbnail.png"
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-small text-white/60">
                                    Video peraih Juara 2 dalam lomba Pertamina Teens Futuremakers 2025.
                                </p>
                            </div>
                        </div>
                        <Button className="font-bold" radius="full" size="sm" as={Link} href="https://www.instagram.com/reel/DMIE_nUTWdc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
                            Tonton
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className={subtitle({class: "mt-4 text-md text-center"})}>
                <p>
                    Hobi mengedit aku bermula dari karantina <strong>Covid-19</strong> (ya, sama seperti perjalanan gitarku).
                    Saya sempat memiliki kanal YouTube gaming yang <strong>cukup sukses</strong>. Kanal itu sudah lama
                    ditinggalkan oleh saya, tetapi bagi yang kepo, dipersilakan mencari kanal atas nama <strong>@Sharkfin07</strong>.
                </p>
            </div>
        </section>
    </DefaultLayout>
  );
}
