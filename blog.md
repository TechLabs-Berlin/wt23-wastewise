# WasteWise

<!---
Hey everyone! Just some short notes.
By commenting out text, it will not be rendered in markdown.
To make a comment in markdown just surround your text using this: <!--- --->

<!---
You can find a very nice markdown resource following this link: https://www.markdown-cheatsheet.com/
 --->


<!---
I suggest that we first make a shared section of the blog post right here in which we describe the idea, the app and the project in some detail. At least more detail than in the README.
Afterwards, I suggest that each track writes one section.
--->


<!--- all tracks and names of members are sorted alphabetically --->

## Artificial Intelligence

<!--- @Andrea: Please pull, then work and commit, then push frequently! 
Since we're on the same branch now, not doing this will lead to disaster^^ --->

### Members
[Andrea Torcianti](https://github.com/trc729)\
[Fabian Janosch Krüger](https://github.com/fabianjkrueger)

### Intro
<!--- to be written by Fabian ; remove this comment later on, just helpful while writing--->

### Training
<!--- to be written by Andrea --->
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

#### Xception training
After having preprocessed the data, we prepared the model. We chose to load  the Xception model with the Imagenet weights, as the Imagenet dataset shares common classes with the classes we wanted to train. 

<p align = "center">
<img src = "images_blog/Xception_1.png" width = "550">
</p>

The average pooling layer was introduced before the dense layer in order to limit the output of the Xception model, since its feature vector output is very large. This measure was taken to prevent overfitting.

Since we have a multiclassification problem, we used categorical cross-entropy as a loss function and accuracy as a metric. Given its adaptivity of the learning rate and efficiency, ADAM was chosen as optimizer for the gradient descent. 

Now only one parameter needed to be determined: the learning rate. This hyperparameter is essential for the successful training of any DL model. According to the paper “Cyclical Learning Rates for Training Neural Networks” by Leslie Smith, we applied a methos (lr_finder) to find the optimal learning rate for our model. After 50 epochs this is the result.

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


#### Regarding the split
Some reservations here: Models built in different frameworks (fastai, tensorflow) do not have the same train/test split, because of different methods used to make these. Setting seed will not help this, because the method itself is different.


#### Misclassifications/confusion matrices, greatest losses, why is that?


#### Interpretability/explainability/XAI etc.


#### Data mismatch

<p align = "center">
<img src = "images_blog/WasteWise_Bernie_Crowdsource.png" width = "400">
</p>


### Deployment
<!--- to be written by Fabian --->


### Conclusion
<!--- both write here --->

#### ...

#### Outlook


### Personal notes
<!--- both write here --->


## Data Science

## User Experience Design

## Web Development

