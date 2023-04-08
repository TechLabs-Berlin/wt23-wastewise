# Data Preparation for the Deep Learning Part

## General Notes
- We will train a neural network for classifying images of pieces of trash.
- It will output the class of the respective piece of trash. 
- We will then use some sort of function or dictionary to connect the class to the proper way of disposal.
- We will use a pre trained model and fine tune it.
- First, we will train a prototype that is able to differentiate between 7 easily distinguishable classes. If that works well, we will build on that approach later and expand the number of classes.
- The first prototype will be trained using the fastai library. We might do the final version using TensorFlow or PyTorch, depending on how well fastai works and how fast we progress.
- We approximated that for fine tuning the prototype about 20 images per class will be sufficient. We start with this number and evaluate it once training is done.

## Data

### Image Data
For downloading the larger part of the images. we us Bing search.

### Labels
We will use just 7 classes for the prototype to see how well the approach works in general. They are the following:
- Banana peel
- Orange (fruit)
- Paper
- Cardboard
- Bottle (either plastic or glass depending on data availability)
- Plastic packaging
- Smartphone
