# WD (Frontend)

## Introduction

The *WasteWise* Web App was built with *React* in a *Next.js* environment. It mostly uses custom HTML and CSS components. Noteworthy is the use of the *Swiper* and *react-webcam* libraries.

Although it’s an app primarily used with mobile devices (due to the convenience of simply taking a picture of the trash being dumped), it’s totally possible to use it on any computer with camera access. However, it is best viewed in the viewport of a browser window that has been resized to fit a mobile screen in portrait mode.

---

## Tour of the app

### Splash Screen

When the user launches the app, all they see is a screen with a logo and a claim. It fades out and goes on to the introductory tour. You can return there at any time later by clicking *Home* in the navigation bar.

Technically, this is a full viewport layer covering the *Introduction Tour* content. After its transition to transparent it’s then taken off the DOM by JavaScript.

### Introduction Tour

As the name suggests, this tour introduces the user to the main features of the app. There are 3 slides, each representing a main function. The slides change automatically after some time, but the user is capable of swiping or clicking a navigation ‘dot’ at any time in order to go to a particular slide. Also, they can exit the tour at any time by clicking the *Get started* button. Links within the copy guide directly to the respective page, while *Get started* always directly points to the core page *Scan waste*.

Technically, this component was built using the popular *Swiper* library, specifically its *Swiper React* version. All slides are placed side by side with only one visible in the viewport at a time. *Swiper* takes care of everything, e.g. watching the viewport dimensions, appending or removing CSS classes based on the chosen slide etc. It’s quite a flexible and huge library that felt a bit intimidating at first. But once I figured out how it builds DOM elements and how to configure it, customising and refactoring my HTML/CSS code wasn’t actually all that difficult. I still feel like I’ve only scratched the surface, but being such a powerful and popular tool I would definitely recommend it and will certainly use it in my future projects.

#### Struggle

This isn’t about *Swiper* but about developing my custom HTML/CSS inside a slide: A notable struggle was an unexpected behavior of the browser rendering the SVG inside the (column-directed) flexbox, specifically inside a flex element that is allowed to grow. My goal was to use the available space optimally: text and illustration should always be distributed harmoniously due to the different viewport sizes of mobile phone browsers, but the SVG should take up as much space as possible. It should be scaled to the maximum vertically and horizontally, but it must never be cropped. Simple, huh? Gosh! I mean, who wouldn’t just give the SVG both a `height: 0;` and `min-height: 100%;` at the same time?! 🤪 CSS is just driving me insane sometimes. Still I love it.

### Scan waste & get back a result

Scanning the waste to get instructions on where to dispose of it is undoubtedly the core feature of this app. That’s why you’ll be taken there every time you click the *Get started* button. Calling this feature will launch your camera immediately, so you can just get started. However, on the first visit, the browser asks for permission to use the camera, but once you grant it access, that’s it. Just take a picture. After some processing time you will get a result back, which of course can also be negative: First you need to be online, your device needs to be connected to the internet. Second, the classification of the image must be successful. The result is given with a probability (‘confidence’) about which object(s) the scanned thing could be. For now, I’ve added a footer that shows that confidence. If it’s below 70 %, you’ll see the *I’m not sure* screen, including the confidence rates in the 3 best guesses. Although it might not make much sense for the end user, I think it’s a nice thing since this app is a MVP still under development, also considering the limited number of items (20) it can currently identify. Depending on the percentage, the confidence is represented by the words *Possibly* (> 70 %), *Probably* (> 80 %), or *No doubt* (> 90 %). If successful, you will receive detailed descriptions of the type of waste including color code, German labels and locations of the right bins. A reset button is always available to invite you to take another picture.

Technically, the logic of this component was the most complex to program during this project. First of all, it was necessary to decide how to get an image from the device’s camera, since there are two main approaches. A nice one is: just use an `<input>` element and add some attributes: `<input type="file" accept="image/*">` lets you select a file from your device to upload or use the camera to taking a picture, all within the common UI of your mobile phone, therefore quite intuitive. Adding `capture="camera"` will even open your camera directly. It’s easy and charming to use a ‘native’ HTML solution, but unfortunately with some caveats: You cannot customise the design. However, as suggested by the UX team, the video stream should be displayed by the camera within a certain frame. Additionally, on a non-mobile device such as a laptop computer, this item does not cause the camera to turn on, it just suggests selecting a file from disk. So I went with the other common approach: use JS to access the camera’s video stream, display it on a canvas, and take a screenshot. This works well on all devices with a camera. I used the popular *react-webcam* library to do the main tasks.

The captured image is sent as a Base64 encoded *data URI* to a *Hugging Face* API – this is where the AI magic has been deployed to. For this reason, the app requires internet access. It returns an object with 3 guesses about what the scanned object might be: including each confidence about it. Based on this, the *React* component *ShowResult* puzzles together a text set from 2 different objects (waste *items* and *types*), appending a specific CSS modifier class to the DOM that is responsible for the color and way the results page is displayed. The reset button resets all react states in the TakePicture component so everything starts over.

### Struggle

One struggle worth noting was debugging a strange result of the captured image. While there is an option to set the width and height of the image as constraints, I’ve actually always wanted to get a square image of specific dimensions to fit the design. But in one of the major browsers I might get back a different ratio, in another browser I might get back a square but in the wrong dimensions. It took me quite a while to understand what it’s about. It’s just not in my hands as a frontend developer to have full control over it as it depends on how the `getUserMedia()` method is implemented in each browser. It may vary depending on the version, operating system, etc. [This project](https://webrtchacks.github.io/WebRTC-Camera-Resolution/?ref=deconstruct#bottom) provides insight based on your setup. In the end I just have to accept this fact and as a workaround I just changed my CSS to show a square no matter what the ratio of the source image is. What have I learned from this? Properly reading the documentation (in this case the one from the react-webcam) could have saved me many hours...

### Predictions

Unfortunately, the *Predictions* function could not be programmed as intended by the DS team. Therefore, all you see here is a screen telling you to hang in there.

Technically, this is a *React* component that returns static JSX/HTML code with no other function.

### Charts

The chart function shows graphical information about waste production in all countries and continents of the world.

Technically, it’s a *Streamlit* app that just loads into an iframe. As we lacked deep backend knowledge in our team, it seemed like a good way for the DS team to provide their data via *Streamlit* and thus connect it to our app. Of course, the limitations are obvious...no custom theme, no way to manipulate the DOM.

---

## Further considerations

### Why we chose *Next.js*

For easy-to-use navigation and routing, our mentor suggested using *Next.js*. And in that regard, since we have a ‘classic’ app navigation bar at the bottom of our viewport, with icons leading to each function, *Next.js* does a really good job.

Also, since at some point in the development process it was still not clear how to connect all the different technologies from each track to our web app, and we also lacked a backend techie, *Next.js* seemed like a good foundation because it offers certain types of backend technologies.

Also considering an eventual deployment of *WasteWise* sometime in the future, *Next.js* seems like a good match, as it was mainly developed for this purpose.

---

## What’s next

There’s still a lot to improve, for example…

- Testing the app on different mobile browsers as some adjustments will likely need to be made
- Implementing a feedback function for the scanned items to train the object classification model, e.g. two buttons *Yes, that’s correct* and *No, you are wrong*
- Adding an upload function as an alternative to using the camera
- Optimising the dimensions and file size of the image sent to the *Hugging Face* API (to reduce traffic and time)
- Debugging how the app works in *Safari* - there seem to be some strange bugs in the CSS interpretation, e.g. resulting in unwanted scrollbars in some cases
- Adding responsive of each waste bin to the output of the *ShowResult* component
- Do some responsive adaptations to meet design needs in larger viewport sizes, e.g. landscape mode, laptop browser…
- Adding smooth CSS transitions for hovering over links or changing what’s displayed
