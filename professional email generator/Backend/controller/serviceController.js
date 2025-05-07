import { generateEmail } from '../services/aiGenerateEmail.js';



 const generatedEmail = async (req, res) => {
     const subject = req.body;
     console.log("🎯 Received request with subject:", subject);
        try {
            const output = await generateEmail(subject);
            console.log("✅ Response ready, sending to frontend");
            res.status(200).json({
                status: 'success',
                message: 'Email generated successfully',
                data: output,
            });
        } catch (error) {
            console.error("Error generating email:", error);
        }
};

export default generatedEmail;
  


  
