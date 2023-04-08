# Image Classifying Neural Network using the Fastai Framework

In this directory you can find the work related to the training of the image classifier using the fastai framework. For more detail, please have a look into the respective notebooks used for training. \
Work done using other frameworks will be found in another directory. \
Data was acquired previously and you can find the work related to that in the DL_data_preparation directory. \
Code is based on the "fastbook", a.k.a. "Deep Learning for Coders with fastai and PyTorch" by Jeremy Howard and Sylvain Gugger.

## Files

For each version of the classifier, there is a Jupyter notebook used to train it. It ends with ".ipynb". In this file you can find the Python code as well as the results. the prototype was mainly there to see if the procedure worked in general, which is why there is minimal interpretation only. For the upscaled version 2, however, a more detailed interpretation of the results was added.

Beyond that, each version was exported to a ".pkl" file. This contains the trained model with all its weights and can be deployed in an application.

## Versions

### Prototype Version 1

- Notebook: prototype_waste_recogniser_fastai_v1.ipynb

- Export: prototype_waste_recogniser_fastai_v1.pkl

### Version 2

- Notebook: waste_recogniser_fastai_v2.ipynb

- Export: The exported file is too large (170 MB) for a regular GitHub repository. Even using git large file storage, it does not work, because GitHub charges for storing files this size. I deployed the classifier in two version in Huggingface Spaces. Here, you can see the file repository of the minimal version, where you can download the exported classifier. https://huggingface.co/spaces/fabianjkrueger/WasteWise_API/tree/main


