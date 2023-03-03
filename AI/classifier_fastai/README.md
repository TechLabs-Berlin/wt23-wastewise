# Image Classifying Neural Network using the Fastai Framework

In this directory you can find the work related to the training of the image classifier using the fastai framework. For more detail, please have a look into the respective notebooks used for training. \
Work done using other frameworks will be found in another directory. \
Data was acquired previously and you can find the work related to that in the DL_data_preparation directory. \
Code is based on the "fastbook", a.k.a. "Deep Learning for Coders with fastai and PyTorch" by Jeremy Howard and Sylvain Gugger.

## Files

For each version of the classifier, there is a Jupyter notebook used to train it. It ends with ".ipynb". In this file you can find the Python code as well as the results.

Beyond that, each version was exported to a ".pkl" file. This contains the trained model with all its weights and can be deployed in an application.

## How to Query using Python

This section is still work in progress and will soon be updated. I will also see if I manage to deploy the model.

```python
# loads the trained network
learn_inf = load_learner(<path_to_model>)
# queries the network
learn_inf.predict(<path_to_image>)
```

## Versions

### Prototype Version 1

- Notebook: prototype_waste_recogniser_fastai_v1.ipynb

- Export: prototype_waste_recogniser_fastai_v1.pkl


