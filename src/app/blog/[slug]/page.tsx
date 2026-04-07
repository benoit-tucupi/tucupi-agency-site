"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <p className="text-white/50">Article introuvable.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Back link */}
          <a
            href="/#blog"
            className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#c9a84c] transition-colors duration-200 mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Blog
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c]">
                {post.category}
              </span>
              <span className="text-white/40 text-sm">{post.date}</span>
              <span className="text-white/40 text-sm">· {post.readTime} de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>

          <hr className="border-white/10 mb-10" />

          {/* Content */}
          <div className="space-y-8">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.title && (
                  <h2 className="text-lg font-bold text-white mb-4 mt-2">
                    {section.title}
                  </h2>
                )}

                {section.body.map((para, j) => (
                  <p key={j} className="text-white/70 leading-relaxed text-[15px] mb-4">
                    {para}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2 my-4">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-white/70 text-[15px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="border-l-2 border-[#c9a84c]/60 pl-5 py-1 my-5 bg-[#c9a84c]/5 rounded-r-xl">
                    <p className="text-white/80 text-[15px] leading-relaxed italic">
                      {section.callout}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <hr className="border-white/10 mt-12 mb-10" />

          {/* CTA */}
          <div className="text-center">
            <p className="text-white/60 mb-6">Un projet en tête ? Parlons-en.</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0f2318] font-bold hover:bg-[#dfc077] transition-all duration-200"
            >
              Nous contacter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
