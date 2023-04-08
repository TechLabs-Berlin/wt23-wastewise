# WasteWise

<!---
I suggest that we first make a shared section of the blog post right here in which we describe the idea, the app and the project in some detail. At least more detail than in the README.
Afterwards, I suggest that each track writes one section.


Similar to our summary:
WasteWise is an app designed to make waste management and recycling more accessible, engaging and user-friendly. With WasteWise, users can scan their waste and receive immediate information about which bin it belongs in. 
Based on a photo of the respective object, it recommends the correct way of disposal to help our environment clean and green. 
This feature relies on a fine-tuned residual neural network image classifier coupled with a function providing the recommendations for each class.
The app also provides valuable insights into waste management and recycling, including recycling rates and waste production per capita starting from 2022 and predicted up to the year 2026 using polynomial regression. The information is accessible through interactive and user-friendly dashboards.


--->


<!--- all tracks and names of members are sorted alphabetically --->

## Artificial Intelligence

### Members
[Andrea Torcianti](https://github.com/trc729)\
[Fabian Janosch Krüger](https://github.com/fabianjkrueger)

### Intro

Draft (this section is not finished yet):

We're the AI track
Right from the start, it was pretty obvious how we will contribute to the team 
We were to provide the image recognition feature

We needed to come up with a strategy for this 

Either we could have labels as waste bin
then we have less classes and we can just throw in stuff together
also we have an immediate output

Or we could have labels as specific waste objects like banana peel 
then we need to have more classes and we do not have an immediate output

We thought about this for a while

Then two things came to our mind:
if we used the waste bin as label, our data would have a very coarse granularity 
we need fine granularity, however
If we have all the objects belonging into the bio waste in one class, they would look very different from another and the algorithm would have a hard time distinguishing between them

(this is a spoiler right now, but in the end it was proven that this approach was correct and that label as waste bin would not have worked as well. See e.g. food waste or plastic toys. I can include this in the conclusion later on.)

because of that, we went for objects as labels instead of bins





Next, we needed to choose an architecture

It's obvious that for image recognition, we would use a CNN
Explain why we need a CNN

We went for transfer learning and fine tuning a pre trained architecture/model
Instead of training everything from scratch.
That makes sense to reuse ressources and to save time. Also, the pre trained nets have very good performance on a wide range of classes already 

Decided to use two different frameworks. 
TensorFlow, this one is well known
fastai, a high level library built on top of PyTorch

### Training
As already clarified in the previous section, two different model architectures were trained and tested within the development of the Wastewise app: Xception and Resnet. Both models serve well for multiclassification problems, and Xception was especially chosen for its computationally efficient architecture.	

The 2 team members tackled the problem from different sides. On the one hand, one focused on training and comparing different versions of the Resnet architecture to investigate the effect that a growing CNN would have on the metrics for our dataset. On the other hand, the other concentrated his efforts on one individual architecture looking deeply into interpretation of the result with XAI techniques. 

The training took place similarly in both cases. Both team members scaled the models up. Initially 7 classes were included in the first prototype and then were extended to 20 classes. At the beginning of the project, we had hoped to reach upwards of 50 classes to ensure a limited but reasonable usability of the app. Unfortunately, we had to abandon the goal when we realized how much effort the data gathering would entail. We believed interpretability would represent a better learning opportunity for us than just scaling the model up.

Considering that in both cases the model had very good accuracy scores (> 98% i n the validation dataset), we will only include in the blogpost the training and result of the 20 classes prototypes. 

#### Data preparation
Both models have specific input requirements and since the training data have been web-scraped from internet, some preprocessing was necessary before feeding the images to the model.

<p align = "center">
<img src = "images_blog/table_req1.png" width = "700">
</p>

For both models the images have been properly preprocessed to ensure their optimal use.

Considering the low amount of training data (620 images for 20 classes) no data was allocated as a test set. The data were split in training and validation sets with an 80/20 split. Given that two different frameworks were deployed (tensorflow and fastai), we realized that the splits resulted in different datasets. We understand this problem affects the direct comparability of the architectures, but unfortunately we were not able to ensure a consistent split within the different frameworks.

#### Pretraining considerations
Since both architectures have proven to be quite strong with much more complex tasks (e.g. Imagenet dataset, with 20.000 classes), we assumed the trained activation maps to be sufficiently complex to achieve the desired goal of 20 classes. For this reason we planned to perform a fine-tuning of the last layer only, while freezing the rest of the network. 

#### Training Xception
After having preprocessed the data, we prepared the model. We chose to load  the Xception model with the Imagenet weights, as the Imagenet dataset shares common classes with the classes we wanted to train. 

<p align = "center">
<img src = "images_blog/Xception_1.png" width = "550">
</p>

The average pooling layer was introduced before the dense layer in order to limit the output of the Xception model, since its feature vector output is very large. This measure was taken to prevent overfitting.

Since we have a multiclassification problem, we used categorical cross-entropy as a loss function and accuracy as a metric. Given its adaptivity of the learning rate and efficiency, ADAM was chosen as optimizer for the gradient descent. 

Now only one parameter needed to be determined: the learning rate. This hyperparameter is essential for the successful training of any DL model. According to the paper “Cyclical Learning Rates for Training Neural Networks” by Leslie Smith, we applied a method (lr_finder) to find the optimal learning rate for our model. After 50 epochs this is the result.

<p align = "center">
<img src = "images_blog/lr_finder_Xception.png" width = "500">
</p>

The optimal learning rate is found at the point of steepest decline of the loss. This should be about 0.0005 and this value was used for training.

In the initial iterations of the training, contrary to what the previous prototypes (3 and 7 classes classifiers) were showing, we started noticing an overfitting of the models. We reached that conclusion by observing the progression of the training: after only 5 epochs the validation loss started stagnating, while the training loss kept decreasing till the end of the training (8th epoch). As a result, we had a discrepancy in training/validation of about 11% (99% in training, 88% in validation). 

To combat the overfitting, a drop-out layer and l2 regularization were added to the model.

<p align = "center">
<img src = "images_blog/Xception_drop_out.png" width = "550">
</p>

This yielded a positive effect, as the validation accuracy increased to ca. 93 %. However, some overfitting was still present. At this point, other techniques as e.g., different data augmentation and early stopping could have been applied, we decided against that as we suspected that the biggest issues was the scarce quality of the dataset and not the architecture of the model. Instead, we opted for investigating the misclassified images and classes, which we will discuss more in detail in the interpretation section.  

#### Training Resnet



### Interpretation
<!--- both write here --->

#### Interpretation Xception
Considering that we have web-scraped all the training images, it seems reasonable to assume that part of the overfitting is due to the poor quality of the data. First, we produce a confusion matrix to see which classes seem to be the most problematic to classify.

<p align = "center">
<img src = "images_blog/CM_Xception.png" width = "500">
</p>

9 images out of 124 are misclassified. The most problematic class seems to be the "toothbrush" class in which 2 out 4 are not classified correctly. Upon inspection, for some images, reasonable assumptions about the misclassifications can be made. For others, it is definitely less clear. In this blog, we´ll show only considerations about 2 images, but the methods outlined can and should be applied to all the misclassified images to better understand how to improve the model.

Let´s take this image of a toothbrush which was classified with a probability of 52% as a glass bottle. 

<p align = "center">
<img src = "images_blog/8.jpg" width = "300">
</p>

The bottle neck shape and transparency of the object make it rather clear why the model made an error. More images of toothbrushes in the training data set should handle the missing variance and ensure that such errors won´t occur again in the future.

This image of plastic packaging was classified as diapers with a probability of about 34%. The probability is low, meaning that the model was not really confident, but it is still worth investigating as the diapers classification is surely peculiar. 

<p align = "center">
<img src = "images_blog/5.jpg" width = "300">
</p>

To investigate predictions of neural networks there are many different algorithms. A promising one for convolutional neural network (CNN) is the Gradient-weighted Class Activation Mapping (Grad-CAM). This is a technique for visualizing and interpreting the activation maps of CNN by highlighting the regions of an input image that contribute the most to a specific output class.

This is the output:

<p align = "center">
<img src = "images_blog/plastic_CAM.png" width = "300">
</p>

Red areas show the pixels that contributed the most to the diapers classification. Interestingly, it seems that network is focusing mostly on the plastic packaging in the picture. It appears also, it may be picking up also on the hands of the person in the photo. An inspection in the diaper class of the data revealed the presence of hands. This may be the reason for the misclassification.
But let´s see if another XAI technique can be used to corroborate our hypothesis. 
The LIME algorithm fits an explainable linear model to the CNN and uses the coefficients of the linear model to explain the predictions. The output is a segmentation (one could consider these superpixels) of the image in which the parts with the most relevant contributions are highlighted. 

<p align = "center">
<img src = "images_blog/plastic_LIME.png" width = "300">
</p>

Also according to LIME, the model is picking up mostly on the plastic packaging, but also on the hands and the upper arm of person in the picture. The similarity of the packing to the diapers and the inclusion of the hands seems to be the likely cause of the misclassification. To solve this problem, the picture of diapers should be filtered of any containing hands.

#### Interpretation Resnet



##### Misclassifications/confusion matrices, greatest losses, why is that?


##### Data mismatch

<p align = "center">
<img src = "images_blog/WasteWise_Bernie_Crowdsource.png" width = 400>
</p>


### Deployment
One of the main goals of our journey at TechLabs was to acquire and expand our knowledge about neural networks as well as to apply and consolidate it in a real world deep learning project. This included the whole process starting from laying out plans and selecting features to implement over the acquisition of data to the training and interpretation of the neural networks themselves. But of course, the other central part of our mission was to assemble all parts and finish the project phase with the production of an app that provides actual value to its users. In order to make all of this happen, we needed to work in close coordination with the rest of our team, especially the members from the web development (WebDev) track, which was an invaluable experience in its own right. Another challenge was that, while there was no lack of a frontend developer, we did not have one for the backend. Because of this, we decided to take charge of and deploy the model ourselves.

The first consideration we had to make was whether to make use of the cloud (deploy on server) or run the model on individual edge devices (include in app code and run locally). Both options are viable and come with a list of pros and contras. While deployment of the model on the cloud necessitates a network connection and adds some latency, it allows to make use of strong hardware running one version for all users that can be updated quickly if a new version of the model is made. On the other hand, running the model locally requires that the code runs natively on a multitude of different mobile devices, but enables offline use and enhanced data security. Our initial approach was to make use of edge devices, because our project mentor had some previous experience using converted TensorFlow models in Javascript. We converted the Xception model, which was trained in TensorFlow, to Tensorflow.js and, together with our WebDev, were able to load the weights inside of JavaScript. Unfortunately, however, preprocessing of the inputs in JavaScript did not work as smoothly as we had hoped initially and adapting all the code to run natively on different devices seemed like too much of a hurdle to take for us within the scope of this project phase. Because of this, we decided to switch strategy and deploy the model on a server.

<p align = "center">
<img src = "images_blog/data_flow_pipeline_wastewise.png" width = 600>
</p>

For this, we selected the Resnet model. We chose this one, since it was trained using the fastai library and thus comes with an integrated image preprocessing function. For accessing it, we created a user interface with Gradio and deployed it on Hugginface Spaces. We decided to make two versions. A minimal version which can be accessed via an API from within JavaScript that was handed over to the WebDev team for integration with the remaining parts of the app. A data frow graph of our pipeline can be seen above. The user takes a photo within the JavaScript app. This is then converted to Base64. Via an API, it is handed as input to the image classifier and the most probable class is returned. Based on this, a way of disposal is recommended.
Also, we made a __standalone version that *you* can use without downloading anything__ by just following the link posted below. It lets you take your own photos using your webcam and outputs the probabilities of the top three classes as well as a recommendation of which bin to use. 
Usage is explained at the top of the linked page and demonstrated in the GIF below. A special feature exclusively integrated in our standalone version is that a class activation map (CAM) can be added to the uploaded image. As described in the chapter about neural network training, this is a method contributing to machine learning interpretability. Parts of the image contributing to the confidence of the model during classification are marked in red. The intensity of the color is proportional to the relevance of the respetive part of the image. In the deployed version, a basic CAM algorithm is used. We also tested a Shapley-based interpretation, but this was associated with significantly longer computation. While it would have provided additional insights, we figured a user would not want to wait this long.

Finally, we would like to add some reservations before you try out WasteWise: As the deployed model currently still is just a prototype, it can only distinguish between 20 classes and still makes a lot of mistakes. The reasons for this are described in the previous chapters. In case we will be able to acquire more realistic user data in the future, we might further improve accuracy and add more classes.

<p align = "center">
<img src = "images_blog/gradio_hgfs_demo.GIF">

#### Links to the deployed models in Huggingface Spaces:
- Standalone version: https://huggingface.co/spaces/fabianjkrueger/WasteWise
- Minimal API version for integration with the JavaScript app: https://huggingface.co/spaces/fabianjkrueger/WasteWise_API

### Conclusion
<!--- both write here --->

Draft:

It was shown that the approach to have labels as waste object type instead of waste bin did work better than the other one would have worked. An example for this is the class "food waste".

#### ...

#### Outlook


### Personal notes
<!--- both write here --->


## Data Science

## User Experience Design

## Web Development

