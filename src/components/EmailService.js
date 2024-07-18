// src/services/EmailService.js

const EmailService = {
    sendEmailReceipt: async (recipientEmail, orderDetails) => {
      try {
        // Mock implementation to simulate sending email
        console.log(`Sending email receipt to ${recipientEmail}...`);
        console.log('Order details:', orderDetails);
  
        // Simulate sending email
        const emailResult = await simulateEmailSending(recipientEmail, orderDetails);
  
        // Return success or failure based on simulation (in a real app, integrate with email service provider)
        return emailResult ? 'Email sent successfully!' : 'Failed to send email.';
      } catch (error) {
        console.error('Error sending email:', error);
        return 'Failed to send email.';
      }
    }
  };
  
  // Mock function to simulate email sending (replace with actual implementation)
  const simulateEmailSending = async (recipientEmail, orderDetails) => {
    // Simulate email sending process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure based on conditions
        const success = Math.random() > 0.5; // Mock success rate
        resolve(success);
      }, 2000); // Simulate delay
    });
  };
  
  export default EmailService;
  