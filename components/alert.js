import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b transform transition-all duration-500 ease-in-out", {
        "bg-accent-7 border-accent-7 text-white shadow-lg": preview,
        "bg-accent-1 border-accent-2 shadow-sm": !preview,
      })}
    >
      <Container>
        <div className="py-3 text-center text-sm font-medium">
          {preview ? (
            <>
              <span className="inline-block mr-2 text-lg">⚠️</span>
              This page is showing draft content.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-300 transition-all font-bold hover:scale-105 inline-block"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              <span className="inline-block mr-2 text-lg">✓</span>
              This page is showing published content.{" "}
              <a
                href="/api/preview"
                className="underline hover:text-cyan duration-300 transition-all font-bold hover:scale-105 inline-block"
              >
                Click here
              </a>{" "}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
