import { ImageResponse } from "next/og";

export const runtime = "edge";
export async function GET(request: Request) {
  const title =
    new URL(request.url).searchParams.get("title") ||
    "Useful software. Built with care.";
  const fontData = await fetch(
    new URL("../../../public/fonts/Inter.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#f4f3ec",
          padding: "65px 75px",
          color: "#22251f",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 23,
          }}
        >
          <span>john / wakaba.</span>
          <span style={{ color: "#4b6538" }}>SOFTWARE DEVELOPER</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 45 ? 57 : 77,
            lineHeight: 1.12,
            letterSpacing: "-3px",
            maxWidth: 980,
          }}
        >
          {title.slice(0, 120)}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 23,
            borderTop: "1px solid #cbd2c1",
            paddingTop: 28,
          }}
        >
          <span style={{ color: "#4b6538" }}>
            Web · Mobile · Business systems · Data tools
          </span>
          <span>Nairobi, Kenya ↗</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Inter", data: fontData, style: "normal" }],
    },
  );
}
