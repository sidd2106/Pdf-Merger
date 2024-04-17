import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

export const mergePdfs = async (p1,p2) => {
  await merger.add(p1);  
  await merger.add(p2); 
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}