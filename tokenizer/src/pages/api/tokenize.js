// Simple tokenizer implementation (replace with actual GenAI tokenizer logic)
function simpleTokenizer(text) {
  return text
    .toLowerCase()
    .split(/\s+|(?=[.,!?;:])|(?<=[.,!?;:])/)
    .filter(token => token.length > 0)
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { text } = req.body
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Invalid text input' })
    }

    // Use simple tokenizer (replace with actual GenAI tokenizer)
    const tokens = simpleTokenizer(text)
    
    res.status(200).json({ tokens })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
