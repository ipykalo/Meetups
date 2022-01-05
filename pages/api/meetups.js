import { MongoClient } from 'mongodb';

const requestHandler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { title, image, address, description } = req?.body;

      if (!title | !image | !address | !description) {
        return res?.status(400).json({
          message: 'Please fill all required fields.'
        });
      }
      const client = await MongoClient.connect('mongodb+srv://ipyka:12457800@cluster0.toaib.mongodb.net/meetups?retryWrites=true&w=majority');
      const db = client.db();
      await db.collection('meetups').insertOne({ title, image, address, description });
      client.close();
      
      res?.status(201).json({
        message: 'Successfully created.'
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Server failed'
    });
  }
}

export default requestHandler;