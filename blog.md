# WasteWise

<!---
I suggest that we first make a shared section of the blog post right here in which we describe the idea, the app and the project in some detail. At least more detail than in the README.
Afterwards, I suggest that each track writes one section.
--->


<!--- all tracks and names of members are sorted alphabetically --->

## Artificial Intelligence

### Members
[Andrea Torcianti](https://github.com/trc729)\
[Fabian Janosch Krüger](https://github.com/fabianjkrueger)

### Intro
<!--- to be written by Fabian ; remove this comment later on, just helpful while writing--->

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

#### ...

#### Outlook


### Personal notes
<!--- both write here --->


## Data Science
  
### Members
[Juliana Belen Quiroga](https://github.com/julianabquiroga)\
[Marina Zaitseva](https://github.com/zaitsevam)
  
### DATA

*Data collecting*

Together, we searched for relevant datasets and subsequently divided the workload. 

Marina took charge of three datasets, pertaining to European countries, for the time period spanning from 2000 to 2021. The datasets were obtained in their raw from the official website of the European Union (www.europa.eu):

1.sdg_11_60_page_linear.csv (Recycling rate of municipal waste in %)
2.cei_pc031_page_linear.csv (Generation of municipal waste per capita in kg)
3,demo_pjan__custom_5181490_page_linear.csv (Population)

Meanwhile, Juliana acquired raw data from 'The World Bank - Data Catalog', which provided information on the type of waste generated by each country worldwide, as well as additional details. 
Databycountry.csv

*Data Cleaning and Visualization*


Regarding Juliana’s data set, the raw data included 219 countries but after some cleaning she decided to keep only the countries with no missing values in order to not affect the visualization. In the end, the cleaned data set includes 158 countries. You can see this in the Jupyer notebook called ‘‘Bycountry_dataset’. After careful consideration, she cleaned the data to include only plastic, metal, glass, organic, paper, and other waste types for inclusion in the final dataset.

After the cleaning process was finished, Juliana created two extra notebooks for creating new csv to use for the visualization in Streamlit, you can check in tostack_continents.ipynb tostack_countries.ipynb. She created a dashboard with two interactive bar charts where users can select a country of their choice through a dropdown menu to view the percentage of each waste type. The other bar graph displays the same information, but categorized by continent. Check the code in streamlitgraph.py.

Upon completion of the cleaning process, Marina created a dashboard with 2 bar charts  to visualize changes in recycling rates and waste management in Europe over time with a dropdown menu. Marina also created an interactive bubble chart with a time-slider to see the waste, the recycling rate and the population for the selected year and country. Check the code and visualizations in Joined_data_with_visualisation_add_data.ipynb (Dash app runs inline)

In order to include as many countries as possible for the visualization,  Marina decided not to exclude countries with incomplete data (countries with absolutely no data were cleaned). This decision is crucial for understanding the visualization and machine learning implementation. Therefore, if the user does not find information on recycling rate and waste generation for a particular country in the selected year, it may be because the data is not available for that specific year. 
  
### MODEL

When we initially embarked on the project, our plan was to use an algorithm to predict user behavior over a period of three or six months, utilizing data from our app's users. However, despite numerous attempts, we were unable to achieve success due to the need to simulate data, as we did not have access to real data, and the models we tried did not prove effective. There is a folder called: Experimental_work where you can see this.

### Classification Model (not implemented)

Juliana started with creating dataset through the random function in python and afterwards making predictions to determine the type of waste generated by different age groups. We experimented with several types of models, but ultimately decided to use a decision tree.   

Marina continued to work by applying the K-Nearest Neighbors (K-NN) algorithm with K=1, which yielded 100% accuracy on the training set. Check First_attempt_ML_Evaluation.ipynb. However, this approach can lead to overfitting when dealing with noisy data. With K=2, the accuracy on the training set dropped below 70%. In real life we would consider collecting more data to improve the accuracy of the model. The cross-validation score is around 0, hence the model did not correctly classify any samples in that fold. The low accuracy on the test set is <=25%, which indicates that the model is not performing well on new data. The accuracy on the training set is 100%, which means the model is able to correctly classify all the samples in the training data, however, not perform well on new data. 

Thus, we decided to discard the current model and explore alternative models instead.

### Regression Model

We opted to utilize data sets from Europe, containing information on the recycling rate and waste production per capita by country, which allowed us to predict these values from 2022 to 2026. After analyzing our data sets with line plots (matplotlib) we agreed that linear regression might be quite suitable for the recycling rate data set, as there is a linear-like relationship between the independent and the dependent variable over time.

![image](https://user-images.githubusercontent.com/117605321/230745726-3a9075c2-6c85-4ee2-8ae8-dec04e9f2539.png)

For the waste production data set, we have decided that a polynomial regression can be a good option to capture the wave-like pattern observed in the line plot.

![image](https://user-images.githubusercontent.com/117605321/230745752-3ad8c46f-6bdb-4c3e-9ae1-31cf8034f472.png)

### Linear Regression (Marina)

As mentioned earlier, some countries in the dataset have incomplete data that was not excluded from the analysis, unless all the data was missing. To start with a linear regression, first, the missing values in the dataset are filled with the mean value for each country (mean imputation). Then, a new dataframe for predictions (“prediction_bycountrypivot”) is created. The code then iterates through each country, selects the data for that country, and performs a linear regression on the data and makes predictions for the next five years (2022-2026). Finally, the predicted values are combined with the cleaned (original) dataset to create a final dataframe called "final_pivot" (Linear_Regression_Recycling_Final_adj.ipynb)

![image](https://user-images.githubusercontent.com/117605321/230745780-ace0e1ad-71c9-431b-8f49-7fb0daa0804e.png)

*Evaluation and performance of linear regression*

The R-squared, MSE and RMSE metrics provide different insights into the performance of the model. R-squared gives an indication of the goodness of fit of the model, while RMSE and MSE give an indication of the magnitude of the errors made by the model. Check the metrics  for each country in Linear_Regression_Recycling_Final_adj.ipynb. 

Below is a quick insight into regression model for some countries:

![image](https://user-images.githubusercontent.com/117605321/230745806-e4dfc1e5-4760-4f2d-8baa-8058277e0750.png)

In general, the metrics show that for the countries with a lot of missing values (see the table below) the prediction is not accurate and the predictions have a larger deviation from the actual values (Albania, Iceland, Montenegro, Bulgaria, Croatia, Lithuania, United Kingdom). 

![image](https://user-images.githubusercontent.com/117605321/230745824-62bda2d5-7e58-4129-b376-83edbaf3dc9f.png)


In some cases, there are countries with box plots containing a significant number of outliers (Norway and Slovakia). This has an impact on the results, indicating that alternative statistical approaches should have been considered for these countries. Lastly, when interpreting the metrics, it is important to keep in mind all decisions for data cleaning are made. In the case of Albania, 90% of data was missing and filled with the mean values, hence low RMSE is misleading, as it is based almost completely on the mean values.

As for the model itself, the mean RMSE of 10.69 indicates that the total model's predictions are off by about 10.69 units from the true values. Although the model is not perfectly accurate, it is able to make reasonably good predictions. The standard deviation of RMSE of 5.64 suggests sensitivity to the particular subset of data used to train and evaluate it.

![image](https://user-images.githubusercontent.com/117605321/230745857-969ee88f-3f48-45f3-b84f-ee5df8e69950.png)

### Polynomial Regression (Juliana)

Juliana followed the same procedure as Marina regarding the missing values that we need to fill in before we can use it for prediction. We create a new data frame called bycountrywastepivot_filled, where we fill in missing values with the mean value for each country.

We then create an empty data frame called prediction_bycountrywastepivot that we use to store our predictions.  We iterate through each country in our filled data frame and perform polynomial regression to predict waste generation for the next 5 years. We create a polynomial regression model with a degree of 2 and fit it to the data. 

We then make predictions for the years 2022 to 2026 and store these predictions in our prediction_bycountrywastepivot df.

![image](https://user-images.githubusercontent.com/117605321/230745902-a3704618-1300-41fa-b947-f32b0766d815.png)
  
*Evaluation and performance Polynomial regression*

We used R-squared values and RMSE values for each country to analyze the performance and accuracy. R-squared values indicate how well the model fits the data, with a perfect score being 1. The higher the R-squared value, the better the model fits the data. RMSE values, on the other hand, measure the difference between the predicted values and the actual values. A high RMSE value indicates that the model's predictions are inaccurate.

The R-squared values range from 0.03 to 0.94, with the highest values being for Slovakia, Spain, and Sweden. The RMSE values range from 9.08 to 81.22, with the lowest values being for Bosnia and Herzegovina and Turkey, and the highest value being for Norway.

To continue evaluating the performance, we used a pipeline, which includes two steps: polynomial feature transformation and linear regression. The degree of the polynomial used is set to 2.

To evaluate the performance of the polynomial regression model, k-fold cross-validation was used, with k=5. The cross_val_score function from scikit-learn is used to obtain the negative mean squared error (MSE) for each fold. Since we are interested in the root mean squared error (RMSE), we take the square root of the negative MSE scores and store them in the cv_rmse variable.

Finally, the mean and standard deviation of the RMSE scores are printed out. These values give an indication of the average and variability of the error in the model's predictions. In this case, the mean RMSE is 30.21, which suggests that the model's predictions are, on average, about 30.21 units away from the actual values. The standard deviation of RMSE is 7.25, indicating that there is some variability in the prediction errors across the different folds of the cross-validation.

![image](https://user-images.githubusercontent.com/117605321/230745946-21ccdc01-7a89-4ad5-96f8-654595d032c2.png)

### Visualization

We successfully visualized the predictions through two interactive maps, with a dropdown feature enabling the user to select the year, and the map being choropleth. One map represented the recycling rate data, while the other displayed waste production data.

![image](https://user-images.githubusercontent.com/117605321/230746167-4fe16964-afd8-4f59-a3bd-62586f17084f.png)


![image](https://user-images.githubusercontent.com/117605321/230746171-2df6e3bf-1b48-4151-9c7d-61aacb6cbb69.png)

### Conclusion

Marina's linear regression was better suited for some countries, while Juliana's polynomial regression was more effective for others. It was also noted that further analysis and alternative statistical approaches may be needed for countries with a lot of missing data or significant outliers. Due to lack of time we couldn’t evaluate other models.

Additionally, comparing the maps created from the predictions highlights interesting trends such as the variation of waste per capita production and the recycling rate by country over time. Some countries have higher waste production, as depicted by a reddish color in the map, but also have high recycling rates, which is a positive indication.


### HOSTING

### Deployment of Dash 

The Dash app displays the visualization within the Google Colab, where the code is running. The deployment of Dash with ngrok did not work out. Because of time constraints and the absence of a backend web developer in the team, the deployment process was not pursued further.

![image](https://user-images.githubusercontent.com/117605321/230746228-482cafb9-18d1-4a97-97b9-672af5b3adef.png)

### Deployment of Streamlit

In this case the visualization was possible and Juliana managed to deploy it through the Streamlit website directly. It generates a link that was sent to the Front end developer who could add it successfully in the web app.

Link: https://julianabquiroga-streamlit-testing-streamlit-5s44p4.streamlit.app/



## User Experience Design

## Web Development

