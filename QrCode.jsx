import { useState } from "react";

export const QrCode = () => {
    const [img, setImg]= useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState("");

    async function generateQR() {
        setLoading(true);
        try {
            const url=`https://api.qrserver.com/v1/create-qr-code/?size={qrSize}x{qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("badassu ma erroru ma",error);
        }finally{
            setLoading(false);
        }
    }
    function downloadQR() {
        fetch(img).then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); 
        });
    }
  return (
    
    <div className="app-container">
        <h1>QR Code Generator</h1>
        {loading && <p>Please wait....</p>}
        {img && <img src={img} alt="QR code" className="qr-code-image" />}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for QR code:</label>
            <input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR code" onChange={(e) => setQrData(e.target.value)} />
            <label htmlFor="sizeInput" className="input-label">Image size(e.g., 150):</label>
            <input type="text" value={qrSize} id="sizeInput" placeholder="Enter image size" onChange={(e) => setQrSize(e.target.value)}/>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick={downloadQR}>Download QR Code</button>
        </div>
    </div>
  );
}
