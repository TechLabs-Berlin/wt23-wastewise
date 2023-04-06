# Image Classifying Neural Network using the Tensorflow Framework
This folder contains all the classifiers trained from the beginning of the project. We started with a simple binary classification and scaled up to 20 classes using tensorflow. 

## Files

For each version of the classifier, there is a Jupyter notebook used to train it. It ends with ".ipynb". In this file you can find the Python code as well as the results.

The file tensorflow_pretrained_model_20classes_v02.ipynb has to be considered the final version and it should be the one being evaluated as it is fully commented and debugged. Additionally, it is based on that file that many important consideration to the final project are made.

## Versions
- tensorflow_pretrained_model_binary_cls.ipynb --> oldest file, initial TF test
- tensorflow_pretrained_model_3classes.ipynb --> first muticlass model
- tensorflow_pretrained_model_7classes.ipynb --> first 7 multiclass model
- tensorflow_pretrained_model_7classes_XAI.ipynb --> first file in which XAI algorithms were used. Here it is also shown a SHAP application. This method was not pursued anymore in the last model. 
- tensorflow_pretrained_model_20classes_v02.ipynb --> final version of the classifier, with 2 XAI methods and the application of the lr_finder function to find the optimum lerning rate.

