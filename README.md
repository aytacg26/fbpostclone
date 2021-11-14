# Facebooks Post Clone

This will contain all functionality of Facebooks Post (From uploading photo to writing a post on a auto expanding text area, adding Emojies, uploading multiple photo and video). It will also open the tag friends list at the same window as in Facebook. For feelings, the list of emojies will appear and it will be possible to
open locations menu with a dummy locations list. When the post is ready, when you click to Post button, it will show up on the main posts page.

Currently, a dummy initial Face Wall created with a header and left menu section. To make it seem like facebook, right manu will also be added and
also search box on header will have functionality like in facebook.

Start Date : November 6, 2021
Expected completion date : Before 15th of November 2021 (Target Date Changed)
At the beginning, I stated to study to create only the clone of the Facebook Post section (image upload, text etc.)
but after a while, it turned to be a clone of Facebook wall, for this reason, target date changed to November 21, 2021

- This contain complete Post on Wall (Image Structure, Likes, comments, likes for comments and reply for comments)
- Post menu
- Header Menus (all from MarketPlace, Groups, Watch pages to the menus on the right of the header)
- Right Header Menu, from user account pages to display and accessibility (Dark Mode, Light Mode etc)
- Functional left side drawer (will open all related pages with the help of react router dom)
- User profile page (with posts and shares, friends, photos of the user)
- List of contacts on the right side drawer (But no messenger functionality :stuck_out_tongue_winking_eye: )
- All simple pages (Privacy, Terms, Advertising etc. they will be a simple copy from Facebook's related pages.)
- And may be Login Page of Facebook (But no login functionality, FOR NOW :grin: )

## Date 07/11/2021 Screenshots from the clone study :

### Wall Image No Activity :

<img width="958" alt="Page" src="https://user-images.githubusercontent.com/51089771/140656438-cc398786-cf3d-4116-b540-6f005778941a.png">

### Wall Image Search Box Used

<img width="958" alt="Page2" src="https://user-images.githubusercontent.com/51089771/140656460-1e9a5db4-4ac8-4967-ac3d-07332615058e.png">

### Wall Image Left Menu Show More Clicked

<img width="958" alt="Page3" src="https://user-images.githubusercontent.com/51089771/140656505-30efc0d9-5992-4c2d-8757-e276c8b04c6b.png">

### Post Presentation Window Started (Uploaded Images Window Completed)

According to the number of uploaded images to the post, the structure/styles of ImageWindow will change,
it checks number of images, number of Portrait Images and Number of Landscape images and creates Pictures
window of post according to those data. Needs some refactoring especially on styles, but currently works well

<img width="960" alt="Page4" src="https://user-images.githubusercontent.com/51089771/141184056-87cfede0-3b23-4fcc-94ca-07ee6dbaa7a4.png">
<img width="958" alt="Page5" src="https://user-images.githubusercontent.com/51089771/141186136-991791eb-1b7a-422c-b6ba-c1f836303e25.png">
<img width="960" alt="Page6" src="https://user-images.githubusercontent.com/51089771/141186144-5950daed-a534-4825-a739-3920afca39bd.png">
<img width="959" alt="Page7" src="https://user-images.githubusercontent.com/51089771/141186353-878dd2d8-1718-465f-9784-e2e70f587acb.png">

### Static Post Menu added to the Post Window (functionality will be added) - 11/11/2021

<img width="958" alt="PostMenu_Completed" src="https://user-images.githubusercontent.com/51089771/141324723-da57aa86-26d9-4919-99dd-8fadb2af17fa.png">

### Post Interactions Section Draft Structure created - 11/11/2021

<img width="958" alt="PostInteractions" src="https://user-images.githubusercontent.com/51089771/141370129-2c7410a5-4185-4155-a523-c95f7d635760.png">

### Header Right Menu created from the reusable CircleButton Component :

<img width="954" alt="HeaderRightMenu" src="https://user-images.githubusercontent.com/51089771/141525946-bab404df-f67f-45c7-91c8-02aa4306d06e.png">

### Account Menu added to Header Right Menu

<img width="959" alt="HeaderAccountMenu" src="https://user-images.githubusercontent.com/51089771/141628373-cc6c31f0-139f-4229-b64e-13ff8bf697ca.png">

### Emojies added to Likes (Emoji by Like Type and List of users who choose that like type)

<img width="960" alt="emojies" src="https://user-images.githubusercontent.com/51089771/141692966-aecebaf1-e625-4861-b4a8-1314933b3946.png">
