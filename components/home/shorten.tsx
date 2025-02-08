"use client";

import { useEffect, useState } from "react";
import Button from "../ui/button";
import Wrapper from "../ui/wrapper";

interface ShortenedLink {
  original: string;
  short: string;
}

export default function Shorten() {
  const [url, setUrl] = useState<string>("");
  const [links, setLinks] = useState<ShortenedLink[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Load previously stored links from localStorage on component mount
  useEffect(() => {
    const storedLinks = localStorage.getItem("shortenedLinks");
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  // Save links to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please add a link");
      return;
    }

    // Prevent duplicate URL shortening
    if (links.some((link) => link.original === url)) {
      setError("This URL has already been shortened.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/cleanuri", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        const newLink = { original: url, short: data.result_url };
        setLinks((prev) => [newLink, ...prev]); // Add new shortened link to the list
        setUrl(""); // Clear input field after successful shortening
      } else {
        setError(data.error || "Failed to shorten URL");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to copy the shortened URL to clipboard
  const handleCopy = (shortUrl: string, index: number) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      aria-labelledby="shorten-heading"
      className="mt-[5.5rem] bg-[#F0F1F6]"
    >
      <h2 id="shorten-heading" className="sr-only">
        Shorten your links
      </h2>

      <div className="bg-gradient-to-b from-white from-50% to-[#F0F1F6] to-50%">
        <Wrapper
          as="form"
          className="grid gap-4 rounded-lg bg-dark-violet bg-[url('/backgrounds/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat p-6 lg:flex lg:items-center lg:gap-6 lg:bg-[url('/backgrounds/bg-shorten-desktop.svg')] lg:px-16 lg:py-[3.25rem]"
          aria-label="Shorten your URL"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="shorten-input" className="sr-only">
            Enter a URL to shorten
          </label>

          <div className="lg:relative lg:w-full">
            <input
              id="shorten-input"
              type="url"
              name="url"
              placeholder="Shorten a link here..."
              className={`w-full rounded-lg px-4 py-3 text-base font-medium placeholder:text-grayish-violet lg:px-8 lg:py-4 lg:text-xl ${error ? "text-red/50 ring-4 ring-red placeholder:text-red/50" : ""}`}
              aria-required="true"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            {error && (
              <div
                className="mt-1 text-xs font-medium italic text-red lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:text-sm lg:font-bold lg:tracking-6"
                aria-live="polite"
              >
                {error}
              </div>
            )}
          </div>

          <Button
            type="submit"
            rounded="lg"
            size="lg"
            disabled={loading}
            className="lg:whitespace-nowrap"
          >
            {loading ? "Shortening..." : "Shorten it!"}
          </Button>
        </Wrapper>
      </div>

      {/* Display list of shortened links */}
      {links.length > 0 && (
        <Wrapper as="ul" className="grid gap-6 py-6 lg:gap-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="grid gap-3 rounded-lg bg-white px-4 py-[0.875rem] lg:flex lg:items-center lg:justify-between lg:px-6 lg:py-4"
              aria-labelledby={`shortened-url-${index}`}
            >
              {/* Display original URL */}
              <a
                href={link.original}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-base font-medium text-very-dark-violet lg:text-xl"
              >
                {link.original}
              </a>

              {/* Divider for mobile view */}
              <div className="h-[1px] bg-gray lg:hidden"></div>

              {/* Display shortened URL with a copy button */}
              <div className="grid gap-3 lg:flex lg:items-center lg:gap-6">
                <a
                  href={link.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium -tracking-2 text-cyan lg:text-xl"
                >
                  {link.short}
                </a>

                <Button
                  rounded="md"
                  className={`py-2 lg:w-[6.375rem] lg:px-0 ${
                    copiedIndex === index
                      ? "bg-dark-violet focus:opacity-100"
                      : ""
                  }`}
                  onClick={() => handleCopy(link.short, index)}
                  aria-label="Copy shortened URL"
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </Button>
              </div>
            </li>
          ))}
        </Wrapper>
      )}
    </section>
  );
}
