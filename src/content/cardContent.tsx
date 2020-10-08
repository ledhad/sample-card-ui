import { ICardContent } from './types';

const cardContent: ICardContent = {
  css: {
    title: `CSS`,
    content: 'CSS enables us to style our web pages with a cascade synthax.',
    expandedContent: `My knowledge of CSS is advanced. I have used FlexBox, CSS Grid, media queries, pseudo-selector elements, transform, transitions, z-index.
     My past projects have brought me to use a couple of tools to make my styling life either simpler such as Sass and its great functionalities, or that answer some of the conundrums that CSS brings (e.g. global naming, dependencies) such as CSS-in-JS libraries (I have used JSS and styled components).
     `,
  },
  html: {
    title: 'HTML',
    content: `HTML is the most famous language of the web. There is more to it than divs and spans!`,
    expandedContent: `HTML presents itself with a set of tags, attributes, actions, etc... to create the page content. Even though some javascript libraries take over some of those roles, the HTML markups remains something important for the browser (buttons should not be a div but a button tag, even though they can be in a div container).
    I would really want to get better at implementiung solutions that respect WCAG standards ato make the web accessible to all.
    I know that there is PUG out there, and probably other HTML tools, but I have never used them.
    `,
  },
  git: {
    title: 'Git',
    content: `Git is probably the most famous version control tool.`,
    expandedContent: `Git is a powerful version control too. I use it in all my projects. Not only can I checkout to a new branches to work on a fixes or try new things without affecting the master, but I can also save my files to the remote repository. I want to get more expertise with this tool.
    `,
  },
  figma: {
    title: 'Figma',
    content: `Figma is a powerful design tool to sketch out screen layouts and more!`,
    expandedContent: `Figma is a UX/UI design tool that is very trending at the moment. It is well maintained and sees a constant flow of new releases to improve the possibilities for the user. In addtion, Figma allows collaborative work. The great advantage of Figma is that it is easy to change the theme across the layouts with its components system.
    I have not had the chance to work in teams so far. I used Figma to design the layouts of this website as well as some vector graphics. I think it is so valuable and time-saving to have a clear idea of what to implement and so to first design it. I really loved using Figma. I don't know how it compares to its competitors.
    `,
  },
  jquery: {
    title: 'jQuery',
    content: `jQuery is a very powerful and widely-used javascript library.`,
    expandedContent: `jQuery has been around for quite sometime and has now achieved the highest rank in terms of usage in modern web. Its synthax is very elegant and concise. It makes it easy to handle the DOM (for animations for instance or for content update), handle events, make AJAX calls and much more. Another advantage is its size, compared to other javascript librairies out there. I like jQuery and I have used it in one of my projects.
    `,
  },
  cpp: {
    title: 'C++',
    content: `C++ is an OOP language designed for the purpose of perfomance.`,
    expandedContent: `C++ is an obejct-oriented programming language. I learned C++ during my college years as part of the curicculum. It was the next step after C. I love the idea of oject orientated programming. Abstraction, reusability, atomization (as I call it)makes this tool very useful for some problems. My most recent experience with C++ was to optimize some code where objects in 3D space where rendered every frame based on the position of the observer. It was hard because I just had the file with no explanation and had to figure what was actually happening before I could come up with solutions to make the rendering faster.
    `,
  },
  javascript: {
    title: 'Javascript',
    content: `Javascript is a core technology for the web. It goes without saying that it is widely use.`,
    expandedContent: `Javascript was developped to enable cross-compatibility between browsers. It respects ECMAScript, a standard that sees some releases once a while, but most notably ES6 with its new synthax to important modules, create arrow-functions, promises, utilities for arrays... HTML presents itself with a set of tags, attributes, actions, etc... I personally fell in love with Javascript and was one of the main reasons why I started learning web-development. My goal is to become an expert at this language.
    `,
  },
  react: {
    title: 'React',
    content: `React is a javascript library used to develop frontend application.`,
    expandedContent: `React works on a component based paradigm to display data to the DOM. It provides a great developper experience with the JSX synthax. Once you get the lifecycle theory of react it is really fun to play with. It can be used to create SPAs or server-side rendered applications. React does not expressedly ship with anything else than that. But there are many libraries to help react with, for instance, routing or state management. A great advantage of React is React Native which allows web-developers to easily transition to mobile app development. Most recently, in 2019, React introduced Hooks that help to make dealing with our components' lifecycle easier and called for a transition towards functional components. They are easier to read, have less code and are super intuitive.
    `,
  },
  typescript: {
    title: 'Typescript',
    content: `Typescript is basically Javascript with static type definitions.`,
    expandedContent: `Javascript uses dynamic typing which can lead to mistakes in the code that cannot be detected but at runtime. Typescript comes to the rescue by providing a set of rules which prevents any wrong code to compile. So typescript is a safeguard agaisnt error at runtime since it does not allow the code to even go pass compilation. Typescript is quite hard to learn but it is worth it. Especially if you work in teams, because it provides some sort of documentation and the code can be shared while limiting errors. I only started learning it recently and I think it is a great tool.
    `,
  },
  gsap: {
    title: 'GSAP',
    content: `GSAP is a performant and professional animation library for the web`,
    expandedContent: `GSAP is a very performant library with a clean synthax to make web animations. Whether it be animating elements like divs and spans, svgs or even 3d objects, GSAP is there to do the job. GSAP comes with many plugins to do all sorts of things. I recently tried GSAP for this project. I found the timeline feature very powerful to create the animations on this card component. It interfaced well with React and has an extensive documentation. There is so much more for me to learn in GSAP, it's exciting! I am also interested in Framer-Motion because of I like how it uses motion values and I have seen them at work in React Native animations using reanimated 2.
    `,
  },
  nodejs: {
    title: 'Node.js',
    content: `Node.js is a backend javascript runtime environment.`,
    expandedContent: `Node.js enables developers to use the same language for scripting on the backend that they use to make their client-side applications. Node.js makes it easy as a javascript developer to implement server-side rendering. It is highly scalable thanks to its architecture. It also uses a packet management system called npm. npm is great tool to manage packages and get thousands of open-source packages from the community.
    `,
  },
  jss: {
    title: 'JSS',
    content: `JSS is a CSS-in-JS library to create styles with certain benefits.`,
    expandedContent: `The advantage of JSS is conflict free styling. Unlike CSS which uses globals, JSS allows the developer to have styling specific to the component and thus eliminates some of the problems of CSS. Some equivalents are CSS modules or styled components. I have used JSS for this project and have found it difficult to achieve some very specific goals when used in React.
    `,
  },
};

export default cardContent;
