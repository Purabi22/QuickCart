// src/components/PDFReceipt.js

import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PDFReceipt = ({ orderDetails }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.text('Receipt', 10, 10);

    // Add order details table
    const tableRows = orderDetails.map(item => [item.name, item.price, item.quantity]);
    doc.autoTable({
      startY: 20,
      head: [['Item', 'Price', 'Quantity']],
      body: tableRows,
    });

    // Save PDF
    doc.save('receipt.pdf');
  };

  return (
    <div className="pdf-receipt">
      <h4>Download Receipt</h4>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PDFReceipt;
