import { writeFile } from "node:fs/promises";
import { siteData } from "./assets/site-data.mjs";

const year = new Date().getFullYear();

function renderMetaTags(page) {
  const common = siteData.person;
  return `
    <meta charset="utf-8" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="author" content="${common.name} - ${common.email}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#111827" />
    <link rel="canonical" href="${page.canonical}" />

    <meta property="og:title" content="${page.ogTitle}" />
    <meta property="og:description" content="${page.ogDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:image" content="${common.avatar}" />
    <meta property="og:site_name" content="${common.name}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.ogTitle}" />
    <meta name="twitter:description" content="${page.twitterDescription || page.ogDescription}" />
    <meta name="twitter:image" content="${common.avatar}" />
  `;
}

function renderGlobalAssets() {
  return `
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-68550549-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-68550549-1");
    </script>
  `;
}

function renderPersonSchema() {
  const { person } = siteData;
  return `
    <script type="application/ld+json">
      ${JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: person.name,
          url: person.website,
          image: person.avatar,
          jobTitle: person.jobTitle,
          address: {
            "@type": "PostalAddress",
            addressLocality: person.locality,
            addressRegion: person.region,
            addressCountry: person.country,
          },
          email: `mailto:${person.email}`,
          sameAs: [person.linkedin, person.github, `${person.website}resume.html`],
        },
        null,
        2,
      )}
    </script>
  `;
}

function renderStrengthCards() {
  return siteData.strengths
    .map(
      (item) => `
        <div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">${item.title}</h3>
          <p class="text-gray-700 leading-relaxed">${item.description}</p>
        </div>
      `,
    )
    .join("");
}

function renderSelectedWorkCards() {
  return siteData.selectedWork
    .map(
      (item) => `
        <div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">${item.title}</h3>
          <p class="text-gray-700 leading-relaxed">${item.description}</p>
        </div>
      `,
    )
    .join("");
}

function renderExitCards() {
  return siteData.exits
    .map(
      (item) => `
        <div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">${item.title}</h3>
          <p class="text-gray-700 leading-relaxed">${item.description}</p>
        </div>
      `,
    )
    .join("");
}

function renderHomeExperienceCards() {
  return siteData.experience.slice(0, 3).map((job) => {
    const bullets = (job.homeBullets || job.bullets)
      .map(
        (item) => `
          <li class="flex items-start gap-2">
            <i class="fas fa-check-circle text-blue-600 mt-1 flex-shrink-0"></i>
            <span>${item}</span>
          </li>
        `,
      )
      .join("");
    const summary = job.summary
      ? `<p class="text-gray-600 text-sm mb-4">${job.summary}</p>`
      : "";

    return `
      <div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
          <div>
            <h3 class="text-2xl font-bold text-gray-900">${job.homeTitle || job.title}</h3>
            <h4 class="text-xl text-gray-700 text-balanced">${job.company}</h4>
          </div>
          <span class="text-gray-500 text-sm font-medium mt-2 lg:mt-0 whitespace-nowrap lg:text-right">
            ${job.dateHome || job.dateResume}
          </span>
        </div>
        ${summary}
        <ul class="space-y-3 text-gray-700 leading-relaxed">
          ${bullets}
        </ul>
      </div>
    `;
  }).join("");
}

function renderRecognitionCards() {
  return siteData.awards
    .map(
      (award) => `
        <div class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <div class="text-3xl text-yellow-500 mb-2">
            <i class="fas ${award.icon}"></i>
          </div>
          <h3 class="text-base font-bold mb-1">${award.title}</h3>
          <p class="text-sm text-gray-600 mb-1">${award.shortDate}</p>
          <a
            href="${award.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:underline text-sm"
          >
            ${award.institution}
          </a>
        </div>
      `,
    )
    .join("");
}

function renderTestimonialCards() {
  return siteData.references
    .map(
      (reference) => `
        <div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
          <div class="mb-4">
            <h3 class="text-xl font-bold text-gray-900 mb-1">${reference.name}</h3>
            <p class="text-gray-600">${reference.company}</p>
          </div>
          <p class="text-gray-700 italic">"${reference.quote}"</p>
        </div>
      `,
    )
    .join("");
}

function renderResumeExperience() {
  return siteData.experience
    .map((job) => {
      const summary = job.summary
        ? `<p class="text-gray-600 text-sm mb-2">${job.summary}</p>`
        : "";
      const bullets = job.bullets.map((item) => `<li>${item}</li>`).join("");

      return `
        <div class="job-item">
          <div class="job-header">
            <div>
              <div class="job-title">${job.title}</div>
              <div class="job-company">${job.company}</div>
            </div>
            <div class="job-date">${job.dateResume}</div>
          </div>
          <div class="job-description">
            ${summary}
            <ul>
              ${bullets}
            </ul>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSkills() {
  return siteData.skills
    .map(
      (group) => `
        <div>
          <h3 class="font-semibold mb-2">${group.title}</h3>
          <ul class="text-sm">
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `,
    )
    .join("");
}

function renderEducation() {
  return siteData.education
    .map(
      (item) => `
        <div class="job-item">
          <div class="job-header">
            <div>
              <div class="job-title">${item.title}</div>
              <div class="job-company">${item.institution}</div>
            </div>
            <div class="job-date">${item.date}</div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderAwardsList() {
  return siteData.awards
    .map(
      (award) => `
        <div class="award-item">
          <div class="job-header">
            <div>
              <div class="job-title">${award.title}</div>
              <div class="job-company">${award.institution}</div>
            </div>
            <div class="job-date">${award.date}</div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderReferencesList() {
  return siteData.references
    .map(
      (reference) => `
        <div class="reference-item">
          <div class="mb-2">
            <div class="job-title">${reference.name}</div>
            <div class="job-company">${reference.company}</div>
          </div>
          <blockquote class="text-gray-700 italic text-sm border-l-4 border-gray-300 pl-4">
            "${reference.quote}"
          </blockquote>
        </div>
      `,
    )
    .join("");
}

function renderHomePage() {
  const { person, seo, about } = siteData;

  return `<!doctype html>
<html lang="en">
  <head>
    ${renderMetaTags(seo.home)}
    <meta name="keywords" content="${seo.home.keywords}" />
    ${renderPersonSchema()}
    ${renderGlobalAssets()}
    <style>
      body {
        font-family: "Inter", sans-serif;
      }
      html {
        scroll-behavior: smooth;
      }
      .text-balanced {
        text-wrap: balance;
      }
    </style>
  </head>
  <body class="bg-gray-50 text-gray-900">
    <header class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div class="flex-shrink-0">
            <img
              src="${person.avatarPath}"
              alt="${person.name}"
              class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-balanced">
              ${person.name}
            </h1>

            <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 text-balanced">
              ${person.shortTitle}
            </p>

            <div class="text-gray-400 mb-6 max-w-4xl space-y-4 leading-relaxed">
              ${about.home.map((paragraph) => `<p>${paragraph}</p>`).join("")}
              <p class="text-blue-300 text-sm md:text-base font-medium">
                ${about.highlight.replace("250M+ UPCs/day", "<strong>250M+ UPCs/day</strong>").replace("7.5B+ catalog rows/day", "<strong>7.5B+ catalog rows/day</strong>")}
              </p>
            </div>

            <div class="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="${person.linkedin}"
                target="_blank"
                rel="noopener noreferrer me"
                class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="${person.github}"
                target="_blank"
                rel="noopener noreferrer me"
                class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="resume.html"
                class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <i class="fas fa-file-alt"></i>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10 py-8 md:py-12">
      <section class="mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 pb-4 border-b-2 border-gray-300">
          Core Strengths
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          ${renderStrengthCards()}
        </div>
      </section>

      <section class="mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 pb-4 border-b-2 border-gray-300">
          Selected Work
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          ${renderSelectedWorkCards()}
        </div>
      </section>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div class="xl:col-span-2">
          <section class="mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-8 pb-4 border-b-2 border-gray-300">
              Systems That Scaled to Exit
            </h2>

            <div class="space-y-6">
              ${renderExitCards()}
            </div>
          </section>

          <section class="mb-12">
            <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 pb-4 border-b-2 border-gray-300">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold text-balanced">Experience</h2>
                <p class="text-gray-600 mt-2">
                  Showing the most recent roles here. Full background is available in the resume.
                </p>
              </div>
              <a
                href="resume.html"
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors whitespace-nowrap"
              >
                <i class="fas fa-file-alt"></i>
                <span>Resume</span>
              </a>
            </div>

            <div class="w-full space-y-8">
              ${renderHomeExperienceCards()}
            </div>
          </section>
        </div>

        <aside class="xl:col-span-1 space-y-10 xl:pt-[4.5rem]">
          <section>
            <h2 class="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">
              Recognition
            </h2>
            <div class="space-y-4">
              ${renderRecognitionCards()}
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">
              Testimonials
            </h2>
            <div class="space-y-6">
              ${renderTestimonialCards()}
            </div>
          </section>
        </aside>
      </div>
    </main>

    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400">
            ${person.name} &copy; Copyright ${year}, All Rights Reserved
          </p>
          <div class="flex gap-4">
            <a
              href="${person.linkedin}"
              target="_blank"
              rel="noopener noreferrer me"
              class="text-gray-400 hover:text-white transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="${person.github}"
              target="_blank"
              rel="noopener noreferrer me"
              class="text-gray-400 hover:text-white transition-colors text-2xl"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <button
      id="backToTop"
      class="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 z-50"
      aria-label="Back to top"
    >
      <i class="fas fa-chevron-up"></i>
    </button>

    <script>
      const backToTopButton = document.getElementById("backToTop");

      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove("opacity-0");
          backToTopButton.classList.add("opacity-100");
        } else {
          backToTopButton.classList.remove("opacity-100");
          backToTopButton.classList.add("opacity-0");
        }
      });

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    </script>
  </body>
</html>
`;
}

function renderResumePage() {
  const { person, seo, about } = siteData;

  return `<!doctype html>
<html lang="en">
  <head>
    ${renderMetaTags(seo.resume)}
    ${renderPersonSchema()}
    ${renderGlobalAssets()}
    <style>
      body {
        font-family: "Inter", sans-serif;
        line-height: 1.6;
      }
      a {
        color: #2563eb;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .section {
        margin-bottom: 2rem;
      }
      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #e5e7eb;
      }
      .job-item,
      .award-item,
      .reference-item {
        margin-bottom: 1.5rem;
      }
      .job-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        gap: 1rem;
      }
      .job-title {
        font-weight: 600;
        font-size: 1.1rem;
      }
      .job-company {
        color: #4b5563;
        font-size: 0.95rem;
      }
      .job-date {
        color: #6b7280;
        font-size: 0.9rem;
        white-space: nowrap;
      }
      .job-description {
        color: #374151;
        font-size: 0.9rem;
        margin-top: 0.5rem;
      }
      ul {
        list-style-type: disc !important;
        padding-left: 1.5rem !important;
        margin-top: 0.5rem;
        list-style-position: outside;
      }
      li {
        margin-bottom: 0.25rem;
        color: #374151;
        font-size: 0.9rem;
        display: list-item;
      }
      .job-description ul {
        list-style-type: disc !important;
      }
      @media (max-width: 640px) {
        .job-header {
          flex-direction: column;
        }
        .job-date {
          white-space: normal;
        }
      }
      @media print {
        body {
          font-size: 11pt;
        }
        .no-print {
          display: none;
        }
        .section {
          page-break-inside: avoid;
        }
      }
    </style>
  </head>

  <body class="bg-white text-gray-900">
    <div class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">${person.name}</h1>
        <div class="text-gray-600 text-sm md:text-base mb-4">
          <div>${person.location}</div>
          <div>${person.phone}</div>
          <div><a href="mailto:${person.email}">${person.email}</a></div>
          <div><a href="${person.website}">${person.website}</a></div>
        </div>
      </header>

      <section class="section">
        <h2 class="section-title">About</h2>
        ${about.resume.map((paragraph) => `<p class="text-gray-700 mb-4">${paragraph}</p>`).join("")}
        <p class="text-gray-700">${about.highlight}</p>
      </section>

      <section class="section">
        <h2 class="section-title">Work Experience</h2>
        ${renderResumeExperience()}
      </section>

      <section class="section">
        <h2 class="section-title">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          ${renderSkills()}
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Education</h2>
        ${renderEducation()}
      </section>

      <section class="section">
        <h2 class="section-title">Awards</h2>
        ${renderAwardsList()}
      </section>

      <section class="section">
        <h2 class="section-title">References</h2>
        ${renderReferencesList()}
      </section>
    </div>
  </body>
</html>
`;
}

await writeFile("index.html", renderHomePage());
await writeFile("resume.html", renderResumePage());
