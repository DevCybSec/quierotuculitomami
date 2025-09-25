import Image from "next/image";

export default function Home() {
  return (
    <>
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Image
        src="/romantic.jpeg"
        alt="Romantic"
        layout="fill"
        priority
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: "100%",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <a
          href="https://youtu.be/x6d4Y-o8pW8?t=15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              borderRadius: "8px",
              border: "none",
              background: "#ff4081",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Go to YouTube
          </button>
        </a>
      </div>
    </div>
    
    </>
  );
}
