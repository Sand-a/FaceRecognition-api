import Clarifai from 'clarifai';

const app = new Clarifai.App ({
    apiKey:'c58d4bb5b1454641a836f0ee6bac80bd'
  });

const imageurl =(req,res) => {
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data=>{res.json(data)})
        .catch(err=>{res.status(400).json('unable to work with clarifai api')})
}

export default imageurl;