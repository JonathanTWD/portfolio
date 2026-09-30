import { Download } from "lucide-react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
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
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download={true}
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div ref={documentRef} className="resume-document">
        <Document file="files/resume.pdf">
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
