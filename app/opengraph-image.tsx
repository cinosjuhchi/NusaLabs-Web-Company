import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NusaLabs Solutions — Digital products with direction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#090d16",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            background: "radial-gradient(circle, rgba(59,103,246,.34), transparent 65%)",
            height: 700,
            position: "absolute",
            right: -140,
            top: -220,
            width: 700
          }}
        />
        <svg
          height="520"
          style={{ position: "absolute", right: 65, top: 50 }}
          viewBox="0 0 400 520"
          width="400"
        >
          <g fill="none" stroke="#3b67f6" strokeWidth="3" opacity=".7">
            <path d="M200 55 L150 105 L135 190 L175 245 L200 315 L245 245 L265 190 L250 105 Z" />
            <path d="M200 315 L170 380 L230 380 Z" />
            <path d="M150 105 L265 190 M135 190 L245 245 M175 245 L265 190" />
          </g>
          <g fill="#f8fafc">
            <circle cx="200" cy="55" r="7" />
            <circle cx="150" cy="105" r="6" />
            <circle cx="135" cy="190" r="6" />
            <circle cx="175" cy="245" r="6" />
            <circle cx="200" cy="315" r="8" />
            <circle cx="245" cy="245" r="6" />
            <circle cx="265" cy="190" r="6" />
            <circle cx="250" cy="105" r="6" />
          </g>
        </svg>
        <div style={{ color: "#7d9bff", fontSize: 22, fontWeight: 700, letterSpacing: "0.22em", position: "relative" }}>
          NUSALABS SOLUTIONS
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 790, position: "relative" }}>
          <div style={{ color: "#94a3b8", fontSize: 22, letterSpacing: "0.08em", marginBottom: 20, textTransform: "uppercase" }}>
            Digital studio for ambitious teams
          </div>
          <div style={{ fontSize: 74, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.98 }}>
            We build digital
          </div>
          <div style={{ color: "#3b67f6", fontSize: 74, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.98 }}>
            products with direction.
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 25, lineHeight: 1.35, marginTop: 28, maxWidth: 680 }}>
            High-converting digital products engineered for ambitious teams.
          </div>
        </div>
        <div style={{ color: "#64748b", fontSize: 18, letterSpacing: "0.12em", position: "relative", textTransform: "uppercase" }}>
          Strategy · Design · Engineering
        </div>
      </div>
    ),
    { ...size }
  );
}
