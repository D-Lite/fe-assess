This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install --save
# Then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project was built with the following major dependencies: 
    Next => 14
    React => 18
    React Redux => 8
    TailwindCSS => 3

Some major implementations: 
- Fully responsive application

![Mobile Screen](<src/assets/images/screenshots/scr.jpg>)
![Mobile Screen 3](<src/assets/images/screenshots/scr2.jpg>)
![Big Screen1](<src/assets/images/screenshots/bg.png>)

### Custom mocked data source to simulate API calls
### Data fetching and filtering
![Mobile Screen 2](<src/assets/images/screenshots/scr1.jpg>)

### Implemented rehydration from the URL properly handled
### Ability to filter from lowest to highest order
![Low to high filtering](<src/assets/images/screenshots/bg.png>)

### Ability to filter from highest to lowest order
![High to low filtering](<src/assets/images/screenshots/bg2.png>)


### Filter parameters synchronization with the URL search parameters
### Filters updating properly based on the URL search parameters
### Custom Page Not Found page handled properly
### Custom hook handling add search parameters, and helper function to help with unique characters
### Data pagination 

[Next 14 was announced some weeks ago](https://nextjs.org/blog/next-14) and it's exciting working with it already, some changes already from 13 and it took some while getting to read through github issues to achieve some things. There are not enough contents already for Next14 (in terms of articles, github issues and discussions and video content). 


Take away: 
>Into Filtering is currently limited, as there is no comprehensive API provided to handle that, the current data been used was mocked on my end to ensure I don't present statically generated data. The flow would have been: choose any option from the filters ====> append the option selected to the URL params ====> pass the URL search params to the API ====> render the newly filtered data

> New changes in Next/navigation and porting away from Next/Router brought some changes to handling URLs

 Functions I implemented initially were not time-optimized AND can be sources of unwanted interruption in production environments. 