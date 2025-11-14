"use client";

import { useState, useEffect } from "react";

const services = [
  {
    title: "تصاميم المنازل",
    description: "خطط مريحة تناسب أنماط الحياة الهادئة مع مساحات مفتوحة ووصول سهل."
  },
  {
    title: "التجديد الناعم",
    description: "تحسين البيوت القديمة بمواد دافئة وإضاءة طبيعية تدعم الراحة النفسية."
  },
  {
    title: "الاستشارات العائلية",
    description: "جلسات هادئة مع فريقنا لتخطيط مساحة تعيش فيها العائلة بتوازن."
  }
];

const projects = [
  {
    title: "بيت الواحة",
    description: "منزل طابق واحد بإضاءة خافتة وحدائق داخلية.",
    details: "تصميم يركز على التنقل السلس مع جلسات هادئة تطل على فناء داخلي.",
    image: "/patterns/pattern-1.svg"
  },
  {
    title: "مجلس الرمال",
    description: "مساحة استقبال بسيطة بلون رملي ولمسات خشبية.",
    details: "مقاعد واسعة وارتفاع منخفض للإضاءة مع تنظيم صوتي يمنح الهدوء.",
    image: "/patterns/pattern-2.svg"
  },
  {
    title: "شرفة النسيم",
    description: "شرفة علاجية تطل على بساتين خضراء.",
    details: "استخدام نباتات طبية وحواجز زجاجية توفر أماناً بدون حجب المنظر.",
    image: "/patterns/pattern-3.svg"
  }
];

const team = [
  {
    name: "مها العتيبي",
    role: "مديرة التصميم",
    bio: "تهتم بتحويل الرؤية إلى تفاصيل عملية مع خبرة 18 عاماً.",
    image: "/portraits/maha.svg"
  },
  {
    name: "سلمان الأنصاري",
    role: "مهندس معماري",
    bio: "يطور حلول الحركة والوصول السهل لكبار السن بنهج بسيط.",
    image: "/portraits/salman.svg"
  },
  {
    name: "ليان المدني",
    role: "مصممة داخلية",
    bio: "تخلق أجواء دافئة باستخدام مواد طبيعية وإضاءة لطيفة.",
    image: "/portraits/layan.svg"
  }
];

const reviews = [
  {
    name: "أم جود",
    text: "المكان أصبح مليئاً بالضوء الطبيعي والراحة، أشعر بالأمان في كل خطوة.",
    detail: "تغيير شامل للمجلس الرئيسي مع مراعاة الحركة بعربة المشي."
  },
  {
    name: "أبو خالد",
    text: "فريق محترم يستمع جيداً، النتيجة هادئة وتناسب جلسات العائلة.",
    detail: "إعادة تنظيم مجلس الضيوف مع تحسين الصوتيات."
  },
  {
    name: "أم ريان",
    text: "أحببت التفاصيل الصغيرة. كل شيء بسيط وواضح ويسهل العناية به.",
    detail: "تصميم مطبخ مفتوح مع تخزين منخفض الارتفاع."
  }
];

const sections = [
  { id: "hero", label: "الرئيسية" },
  { id: "about", label: "من نحن" },
  { id: "services", label: "خدماتنا" },
  { id: "projects", label: "مشاريعنا" },
  { id: "team", label: "فريقنا" },
  { id: "reviews", label: "آراء" }
];

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const activeProject = projects[activeProjectIndex];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-clay/40 bg-sand/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="rounded-full bg-charcoal px-4 py-2 text-lg font-display text-sand shadow-sm">
            دار الراحة
          </span>
          <ul className="flex gap-4 text-base font-medium text-charcoal/80">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`rounded-full px-3 py-2 transition ${
                    currentSection === section.id
                      ? "bg-oasis/90 text-white shadow-md"
                      : "hover:bg-clay/40"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-16">
        <section
          id="hero"
          className="rounded-3xl bg-charcoal p-10 text-sand shadow-xl shadow-charcoal/15"
        >
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit rounded-full bg-oasis/90 px-5 py-2 text-lg font-display text-white">
              تصميم معماري بلمسة إنسانية
            </span>
            <h1 className="text-4xl font-display leading-snug md:text-5xl">
              نبني مساحات هادئة تسهّل الحياة على من نحبهم.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-sand/90">
              فريق معماري يرافقك بخطوات واضحة لتصميم منازل بسيطة، بألوان دافئة ومسارات
              مريحة تلائم احتياجات كبار السن.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-sand px-6 py-3 text-lg font-semibold text-charcoal transition hover:bg-white"
              >
                استكشف خدماتنا
              </a>
              <a
                href="#projects"
                className="rounded-full border border-sand px-6 py-3 text-lg font-semibold text-sand transition hover:bg-sand hover:text-charcoal"
              >
                شاهد المشاريع
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 rounded-3xl bg-white px-8 py-12 shadow-lg shadow-charcoal/10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-display text-charcoal">نعمل ببطء متعمد</h2>
            <p className="text-lg leading-loose text-charcoal/80">
              نركز على الراحة النفسية والجسدية لكل فرد في المنزل. نعمل مع العائلة خطوة بخطوة،
              ونستخدم مواد تمنح الشعور بالدفء والأمان. نعتمد تقويماً واضحاً يساعد كبار السن على
              معرفة ما يحدث دون تعقيد.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl bg-sand/70 p-8 text-lg leading-loose text-charcoal/80">
            <p>• جلسات تعريفية بسيطة بدون مصطلحات فنية معقدة.</p>
            <p>• مخططات كبيرة وواضحة تبرز المسارات الرئيسية.</p>
            <p>• زيارات منزلية للتأكد من أن كل زاوية مريحة وآمنة.</p>
          </div>
        </section>

        <section id="services" className="rounded-3xl bg-white px-8 py-12 shadow-lg shadow-charcoal/10">
          <h2 className="text-3xl font-display text-charcoal">خدماتنا الهادئة</h2>
          <p className="mt-4 text-lg text-charcoal/70">
            حلول متوازنة تجمع بين الخطوط الحديثة واللمسة المنزلية الدافئة.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-clay/40 bg-sand/30 p-6 transition hover:-translate-y-1 hover:bg-sand/60"
              >
                <h3 className="text-2xl font-display text-charcoal">{service.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-charcoal/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-12 text-sand shadow-xl shadow-charcoal/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,237,227,0.18),transparent_60%)]" />
          <div className="relative z-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-display">مشاريع تهدئ الحواس</h2>
                <p className="mt-3 max-w-xl text-lg text-sand/80">
                  استعرض المشاريع بتحريك المؤشر أو الانتظار. كل مشروع يعرض تفاصيل تساعد على
                  تخيل المساحة بسهولة.
                </p>
              </div>
              <div className="flex gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    onMouseEnter={() => setActiveProjectIndex(index)}
                    onFocus={() => setActiveProjectIndex(index)}
                    className={`h-2 w-8 rounded-full transition ${
                      activeProjectIndex === index ? "bg-oasis" : "bg-sand/40"
                    }`}
                    aria-label={`عرض ${project.title}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 grid items-center gap-8 md:grid-cols-[1.1fr,0.9fr]">
              <div
                key={activeProject.title}
                className="rounded-3xl border border-sand/20 bg-sand/10 p-7 animate-fadeUp"
              >
                <h3 className="text-2xl font-display">{activeProject.title}</h3>
                <p className="mt-3 text-lg text-sand/80">{activeProject.description}</p>
                <p className="mt-4 text-base leading-relaxed text-sand/70">
                  {activeProject.details}
                </p>
              </div>
              <div className="flex min-h-[220px] items-center justify-center rounded-3xl bg-sand/10 p-6">
                <img
                  key={activeProject.image}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-48 w-48 rounded-2xl border border-sand/20 bg-white p-4 object-contain animate-fadeIn"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="rounded-3xl bg-white px-8 py-12 shadow-lg shadow-charcoal/10">
          <h2 className="text-3xl font-display text-charcoal">قلوب تبني قبل الجدران</h2>
          <p className="mt-4 text-lg text-charcoal/70">
            فريق صغير متفرغ للاستماع والتخطيط، يجمع الخبرة الهندسية باللمسة الإنسانية.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="flex flex-col items-center gap-4 rounded-3xl border border-clay/30 bg-sand/30 p-6 text-center"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-sand">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-24 w-24 rounded-full border border-clay/40 object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display text-charcoal">{person.name}</h3>
                  <p className="text-base font-medium text-oasis">{person.role}</p>
                  <p className="text-base text-charcoal/70">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="grid gap-10 rounded-3xl bg-white px-8 py-12 shadow-lg shadow-charcoal/10 md:grid-cols-[0.6fr,1.4fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-display text-charcoal">ثقة العائلات</h2>
            <p className="text-lg leading-relaxed text-charcoal/70">
              نستقبل العائلات في المكتب أو عبر زيارة منزلية. نحرص على تبسيط الخطوات مع متابعة
              دائمة بعد التسليم.
            </p>
          </div>
          <div className="grid gap-4">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-3xl border border-clay/30 bg-sand/20 p-6 text-lg leading-relaxed text-charcoal/80"
              >
                <p className="font-display text-2xl text-charcoal">{review.name}</p>
                <p className="mt-3">{review.text}</p>
                <footer className="mt-3 text-base text-charcoal/60">{review.detail}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-clay/40 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center text-base text-charcoal/70 md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} دار الراحة. جميع الحقوق محفوظة.</p>
          <p>الهاتف: 920000000 · البريد: hello@dar-alraha.com</p>
        </div>
      </footer>
    </div>
  );
}
