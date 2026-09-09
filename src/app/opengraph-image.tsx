import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#312016",
          color: "#f5efe6",
        }}
      >
        <span
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e0aa66",
          }}
        >
          {siteConfig.role}
        </span>
        <span
          style={{
            marginTop: 20,
            fontSize: 88,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          {siteConfig.name}
        </span>
        <span
          style={{
            marginTop: 28,
            fontSize: 28,
            maxWidth: 900,
            color: "#cbbfae",
          }}
        >
          {siteConfig.tagline}
        </span>
      </div>
    ),
    { ...size },
  );
}
