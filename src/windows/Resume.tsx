import { Download } from "lucide-react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n";
import { RESUME_URL } from "../constants";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const t = useTranslation();
  const documentRef = useRef<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState<number>();

  useEffect(() => {
    const container = documentRef.current;
    if (!container) return;

    const updatePageWidth = () => {
      setPageWidth(Math.min(820, Math.max(280, container.clientWidth - 32)));
    };

    updatePageWidth();
    const observer = new ResizeObserver(updatePageWidth);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="window-header">
        <WindowControls target="resume" />
        <h2>{t.resume.title}</h2>

        <a
          href={RESUME_URL}
          download="CV-Jonathan-Morera.pdf"
          className="toolbar-button"
          title={t.resume.download}
          aria-label={t.resume.download}
        >
          <Download aria-hidden="true" />
        </a>
      </div>
      <div ref={documentRef} className="resume-document">
        <Document file={RESUME_URL}>
          <Page
            pageNumber={1}
            width={pageWidth}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
