# WasteWise

<!--- 
WasteWise logo
--->
<p align = "center">
<img src = "UX/logo-color.png" width = "250">
</p>

## Summary 

WasteWise is an app designed to make waste management and recycling more accessible, engaging, and user-friendly. With WasteWise, users can scan their waste and receive immediate information about which bin it belongs in.
Based on a photo of the respective object, it recommends the correct way of disposal to help keep our environment clean and green.
This feature relies on a fine-tuned residual neural network image classifier coupled with a translator function providing the recommendations for each class.
The app also provides valuable insights into waste management and recycling, including recycling rates and waste production per capita starting from 2000 and predicted up to the year 2026 using linear and polynomial regression. The information is accessible through interactive and user-friendly dashboards.
All features are assembled into one application using JavaScript.

## How to run the demo

### Fully Assembled App

To see all the features, take a tour through the fully assembled app. Please clone this repository to your local computer and follow the steps below.

1. Node.js and npm must be installed on your computer. Check this in a terminal window using the `node -v` and `npm -v` commands. For both you will get back either the version number or an error message. If npm or even both is not installed yet, do that first → see https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. In a terminal window go to the root folder of our repository and make sure to `git pull` the main branch
3. Navigate to the app directory with `cd WD/next-js-app/wastewise-app/`
4. Run `npm install` → this will download some packages to your computer
5. Run `npm run dev` → this will start a server service
6. Open a browser window, resize it to fit a mobile phone, and then navigate to `http://localhost:3000` → Voilà! (please make sure in your terminal if it is the same local host address)
7. In order to stop the server go back to the terminal window and press the keys `control` + `c`

### Minimal Waste Image Classifier App in Huggingface Spaces

To quickly get an impression of the waste recognition and disposal recommendation feature, you can use this standalone demo deployed in the web. Follow this link and enable your webcam: https://huggingface.co/spaces/fabianjkrueger/WasteWise

<p align = "center">
<img src = "images_blog/gradio_hgfs_demo.GIF">

__Steps:__

1. Take a photo of your waste. Make sure to present only one object at a time and that your background is neutral.
2. Start inference by pressing "Submit". After a few seconds, you can see the results.
3. If you want to see an interpretation, click "Interpret" and wait a few seconds. This will show you which parts of the image were most important for the model to classify the image.
4. To repeat, hit "Clear" and take a new photo.

### Disclaimer
At the time this is written, the image classifier model can classify 20 classes with an accuracy of about 90%. Due to data mismatch (trained on downloaded stock photos, queried on your realistic user images), it will still make lots of mistakes on user data and is likely to misclassify many images. In the future, provided we are able to get more and better data, this might be improved.

## Contributors

<!--- all tracks and names of members are sorted alphabetically --->

### Artificial Intelligence: 
[Andrea Torcianti](https://github.com/trc729)\
[Fabian Janosch Krüger](https://github.com/fabianjkrueger)

### Data Science
[Juliana Quiroga](https://github.com/julianabquiroga)\
[Marina Zaitseva](https://github.com/zaitsevam)

### User Experience Design
[Vincent Oluwadamilare Akinyoyenu](https://github.com/OluwadamilareAkin)
[Olayinka Florence Ojo](https://github.com/ojoflorence)

### Web Development
[Andreas](https://github.com/crftwrks)
