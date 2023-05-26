import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Electric Controller</title>
        <meta
          name="description"
          content="Welcome to our site dedicated to electrical wiring, electricity, construction, electrical safety, electrical engineering, electrical maintenance, and electrical work. We provide expert insights, tips, and resources for all your electrical needs. From inspection and circuit breaker maintenance to fuse replacements and light fixture installations, our team of professionals ensures top-notch service. We also offer key programming, key copying, blade cutting, and lock-related services, including making new keys, resolving lost key situations, and locksmith services for locked cars. Explore our site for comprehensive information and solutions in the world of electrical and locksmith services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="663Rh_Q0VY4gkreQlz-mwt0QRA7bdzGnRMUBTLMnNyA"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </nav>

        <section className="w-full">
          <div className="w-full h-[450px] relative">
            <Image src="/background.jpg" alt="electric " fill={true} />

            <div
              className="flex flex-col gap-[25px] top-[28%] left-[50%] translate-x-[-50%] absolute p-[25px]"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2))",
              }}
            >
              <h1 className="text-[#FFF] whitespace-nowrap">
                Electric Controller
              </h1>
              <p className="text-[30px]">Mobile: 3476165341</p>
              <p className="text-[30px]">Email: giorgiloladze88@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2 className="projects-section-header">Services</h2>

          <div className="projects-grid">
            <div className="project project-tile cursor-pointer">
              <img
                className="project-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSELVHUzEjG8jUA1oMoH27yN0uYMCLefMQbeQ&usqp=CAU"
                alt="car key programming"
              />
              <h3 className="project-title">
                <span className="code">&lt;</span>
                Car Key Programming
                <span className="code">&#47;&gt;</span>
              </h3>
            </div>
            <div className="project project-tile cursor-pointer">
              <img
                className="project-image"
                src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew.png"
                alt=" house electrician"
              />
              <h3 className="project-title">
                <span className="code">&lt;</span>
                House Electrician
                <span className="code">&#47;&gt;</span>
              </h3>
            </div>
            <div className="project project-tile cursor-pointer">
              <img
                className="project-image"
                src="https://miro.medium.com/max/1024/1*zgL7m9aVUhlBUhCrHKy2QQ.jpeg"
                alt="security systems"
              />
              <h3 className="project-title">
                <span className="code">&lt;</span>
                Security Systems
                <span className="code">&#47;&gt;</span>
              </h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
