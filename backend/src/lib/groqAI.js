const Groq = require('groq-sdk');
require('dotenv').config();

const groqAiPromptGenerator = async (prompt) => {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        
        // Await the response from Groq
        const res = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `${prompt}`,
                },
            ],
            model: "llama-3.3-70b-versatile",
        });

        return {
            success: true,
            data: res['choices'][0]['message']['content'],
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            data: 'Failed to generate prompt',
        };
    }
};

module.exports = {
    groqAiPromptGenerator,
};

