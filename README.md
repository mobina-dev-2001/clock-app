# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![Screenshot of the Clock App](./preview.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/clock-app--Moph87wxY)
- Live Site URL: [Live site URL](https://mobina-dev-2001.github.io/clock-app/)

## My process

I began by building the core structure and layout with responsive behavior using `clamp()` for scalable typography and spacing. I implemented real-time clock updates and location/timezone detection via the IPBase API. I integrated animations using Framer Motion for a smooth expanding panel and time transitions. For quotes, I used the Ninja API and ensured proper error fallback behavior.

Special attention was paid to accessibility and performance — including semantic roles, ARIA attributes, and session caching for IP data.

### Built with

- Semantic HTML5
- Tailwind CSS (Utility-first CSS framework)
- React (with Vite)
- Framer Motion (React animation library)
- API integrations: [ipbase.com](https://ipbase.com/) and [api-ninjas.com](https://api-ninjas.com/)
- `date-fns` & `date-fns-tz` for timezone-aware calculations
- Accessible UI: ARIA roles, proper tab indices, live regions
- Mobile-first responsive design
- Modular and reusable components

## Author

- GitHub - [@mobina-dev-2001](https://github.com/mobina-dev-2001)
- Frontend Mentor - [@mobina-dev-2001](https://www.frontendmentor.io/profile/mobina-dev-2001)
