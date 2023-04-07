# Folder for Work on the Image Recognition Feature

Below, the content of the subdirectories is described.

## DL_data_preparation
Contains the notebooks for image data acquisition as well as for data preparation of the acquired image data.

## MLOps
Everything related to the deployment of the trained/fine tuned neural network image classifiers. 
- A notebook in which the TensorFlow model is converted to TensorFlow.js (JavaScript). It also contains a tutorial explaining how to deploy the model in the app for the WebDev team.\
Path: tensorflow_js/tensorflow_js.ipynb 
- The converted TensorFlow.js model as dataflow graph and weight manifest. \
Path: tensorflow_js/model.json
- A collection of binary weight files (the group-shard files).

## classifier_fastai
Prototyping and upscaling of the image classifier using fastai as well as interpretation.

## classifier_tensor_flow
Prototyping and upscaling of the image classifier using TensorFlow as well as interpretation.

## data_20_classes
Contains image data for 20 classes. This data was agreed on to be used for all classifiers that distinguish between exactly 20 classes in order to make different frameworks comparable and to improve reproducibility.

## models
For the first product prototype, we agreed on training for 20 classes. This directory contains the exported models of these 20-class-classifiers. Previous prototypes that distinguish less classes can be found in the respective "classifier_.*" directories.

Frameworks used: TensorFlow and fastai (which builds on top of PyTorch)

## sandbox
For experimenting, trying and testing out code and features as well as for storing handy scripts and code snippets. Not relevant for final product.