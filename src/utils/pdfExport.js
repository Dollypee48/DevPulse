import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function downloadDashboardPDF(chartRef, activities) {
  const pdf = new jsPDF("p", "pt", "a4");
  const padding = 20;
  let y = padding;

  pdf.setFontSize(20);
  pdf.setTextColor("#6B21A8"); 
  pdf.text("DevPulse - Activity Log", padding, y);
  y += 30;

  
  if (chartRef?.current?.canvas) {
    const canvas = chartRef.current.canvas;
    const chartImage = await html2canvas(canvas);
    const chartDataUrl = chartImage.toDataURL("image/png");

    const imgWidth = 500;
    const imgHeight = (canvas.height / canvas.width) * imgWidth;
    pdf.addImage(chartDataUrl, "PNG", padding, y, imgWidth, imgHeight);
    y += imgHeight + 30;
  }

  // 3. Add Activity Logs
  pdf.setFontSize(12);
  pdf.setTextColor("#111827");

  activities.forEach((a, index) => {
    const logEntry = [
      `🔹 Title: ${a.title}`,
      `📅 Date: ${a.date}`,
      `🏷️ Tags: ${a.tags.join(", ")}`,
      `📝 Notes: ${a.notes}`,
      " "
    ];
    logEntry.forEach(line => {
      pdf.text(line, padding, y);
      y += 18;

      if (y > 780) { 
        pdf.addPage();
        y = padding;
      }
    });
  });

  pdf.save("DevPulse-Report.pdf");
}
