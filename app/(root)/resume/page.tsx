"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumePage = () => {
    const handleDownload = () => {
        // Create an anchor element
        const anchor = document.createElement('a');
        
        // Set the href attribute to the path of your PDF file
        anchor.href = '/venil-resume.pdf';
        
        // Set the download attribute to specify the filename
        anchor.download = 'venil-resume.pdf';
        
        // Append the anchor to the document body
        document.body.appendChild(anchor);
        
        // Click the anchor to trigger the download
        anchor.click();
        
        // Remove the anchor from the document body
        document.body.removeChild(anchor);
    };

    return ( 
        <div className="px-5 lg:px-20 min-h-[76vh] flex justify-center items-center">
            <Button className="gap-x-3" onClick={handleDownload}>
                <Download /> Export Resume
            </Button>
        </div>
     );
}
 
export default ResumePage;