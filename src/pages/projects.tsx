import {subtitle, title} from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import BlurText from "@/components/TextAnimations/BlurText/BlurText.tsx";
import {Card, CardHeader, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import {Divider} from "@heroui/divider";

const projectItems = [
    {
        title: "Website Ini, Bung!",
        description: "Kebetulan, website ini adalah proyek React, TypeScript, dan Tailwind CSS pertama saya.",
        category: "Programming",
        img: "/project-img/project-saya-zika.png",
        imgClass: "",
        alt: "Photo of Zika with the logo of React, and Tailwind CSS"
    },
    {
        title: "SNBT Master",
        description: "Sebuah game RPG simpel tentang mempersiapkan diri untuk SNBT-UTBK 2025 yang berbasis teks yang dibuat menggunakan C++",
        link: "https://github.com/Sharkfin07/snbt-master",
        category: "Programming",
        img: "/project-img/project-snbt-master.png",
        imgClass: "",
        alt: "SNBT Master in-game screenshot"
    },
    {
        title: "Cara Menanam Biopori",
        description: "Video peraih Juara 2 dalam lomba Pertamina Teens Futuremakers 2025.",
        link: "https://www.instagram.com/reel/DMIE_nUTWdc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        category: "Videography",
        img: "/cmb-thumbnail.png",
        imgClass: "",
        alt: "SNBT Master in-game screenshot",
        lightText: true
    },
    {
        title: "Onigiri Nusantara",
        description: "Sebuah realisasi perpaduan budaya Jepang dan Indonesia: onigiri dengan rasa khas Indonesia. Saya adalah pengurus branding di proyek ini.",
        link: "",
        category: "Entrepreneurship",
        img: "/project-img/project-onigiri-nusantara.png",
        imgClass: "",
        alt: "Onigiri nusantara mockup"
    },
    {
        title: "[REDACTED]",
        description: "w3bs1t3-p0rt0f0l10$l4m4ku,-t0long-j4ng4n@d1buk4!",
        link: "https://sharkfin07.github.io/css-personal-website/",
        category: "???",
        imgClass: "",
        lightText: true,
        img: "https://images.unsplash.com/photo-1610337673044-720471f83677?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGljfGVufDB8fDB8fHww",
        alt: "TV Static"
    },
];

const projectElements = projectItems.map((project, index) => {
    const disableButton:boolean = Boolean(project.link)
    const projectButton = (
        <Button className="text-tiny" color="primary" radius="full" size="sm" as={Link} href={project.link} isIconOnly showAnchorIcon>
        </Button>
    )
    return (
        <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-6 md:col-span-4"
            key={index}
        >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className={`text-tiny ${project.lightText ? "text-white/60" : "text-black/60"} uppercase font-bold`}>{project.category}</p>
                <h4 className={`${project.lightText ? "text-white" : "text-black"} font-medium text-2xl`}>{project.title}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt={project.alt}
                className={"z-0" + project.imgClass}
                src={project.img}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div className="pr-3">
                    <p className="text-black text-small">{project.description}</p>
                </div>
                {disableButton ? projectButton : null}
            </CardFooter>
        </Card>
    )
});

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-10">
          <h1 className={title({ class: "font-instrument-serif italic leading-5 md:py-3 lg:py-5" })}>
              <BlurText
                  text="projects in progress!"
                  delay={150}
                  animateBy="words"
                  direction="top"
              />
            </h1>
          <p className={subtitle({class: "text-center text-foreground-500"})}>
              Untuk saat ini, proyek yang saya buat masih belum banyak.
              Saya harap kalian tidak kecewa, ya!
          </p>
          <div>
          </div>
      </section>

        <Divider className="my-5" />

        <section className="flex items-center justify-center">
            <div className="grid grid-cols-12 gap-6 my-8">
                {projectElements}
            </div>
        </section>
        <section>
            <p className="text-center text-foreground-500">
                More to come, stay tuned!
            </p>
        </section>
    </DefaultLayout>
  );
}
