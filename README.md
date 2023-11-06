![bg](https://github.com/D-Lite/fe-assess/assets/44473671/2396cded-1bfe-4a46-833f-b33947f79921)This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
    Typescript => 5

Some major implementations: 
- Fully responsive application
![bg](https://github.com/D-Lite/fe-assess/assets/44473671/ba54bae3-5213-4528-82d2-d5431f3a1b2e)
![scr](https://github.com/D-Lite/fe-assess/assets/44473671/4c78683c-6c7b-4ed9-8d86-94de333552bb)
![scr2](https://github.com/D-Lite/fe-assess/assets/44473671/60ce3635-3d41-4983-99c1-9314b4555e5b)

### Custom mocked data source to simulate API calls
### Data fetching and filtering
![scr1](https://github.com/D-Lite/fe-assess/assets/44473671/8499761d-f145-4496-8326-333977b7838d)

### Implemented rehydration from the URL properly handled
### Ability to filter from lowest to highest order
![bg1](https://github.com/D-Lite/fe-assess/assets/44473671/10435c8b-2c68-494c-a81d-a901ad43fdf9)

### Ability to filter from highest to lowest order
![bg2](https://github.com/D-Lite/fe-assess/assets/44473671/fb86bc83-9290-4252-bc5d-aad41f39c229)


### Filter parameters synchronization with the URL search parameters
### Filters updating properly based on the URL search parameters
### Custom Page Not Found page handled properly
### Custom hook handling adds search parameters and a helper function to help with unique characters
### Data pagination
### Typescript first workflow

[Next 14 was announced some weeks ago](https://nextjs.org/blog/next-14), and it's exciting working with it already, some changes already from 13, and it took a while getting to read through GitHub issues to achieve some things. There are not enough content already for Next14 (in terms of articles, GitHub issues discussions and video content). 


Take away: 
>Into Filtering is currently limited, as there is no comprehensive API provided to handle that, the current data being used was mocked on my end to ensure I don't present statically generated data. The flow would have been: choose any option from the filters ====> append the option selected to the URL params ====> pass the URL search params to the API ====> render the newly filtered data

> New changes in Next/navigation and porting away from Next/Router brought some changes to handling URLs

 Functions I implemented initially were not time-optimized AND can be sources of unwanted interruption in production environments. 
