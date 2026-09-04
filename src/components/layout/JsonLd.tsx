/**
 * Renders a JSON-LD block. The payload is built in `lib/structured-data` from
 * typed content, never from user input, so serialising it directly is safe.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
