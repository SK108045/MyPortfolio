import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    // Update the file path to point to root directory
    const filePath = path.join(process.cwd(), 'subscribers.txt');
    
    try {
      // Add a console.log to track the email
      console.log('Subscribing email:', email);
      await fs.promises.appendFile(filePath, `${email}\n`);
      return res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
      console.error('Error saving email:', error);
      return res.status(500).json({ message: 'Failed to subscribe' });
    }
  }
  
  return res.status(405).json({ message: 'Method not allowed' });
}
