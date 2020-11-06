import { ICardContent } from './types';

const cardContent: ICardContent = {
  css: {
    title: `CSS`,
    content: 'CSS enables us to style our web pages with a cascade synthax.',
    expandedContent: `My knowledge of CSS is advanced. I have used FlexBox, CSS Grid, media queries, all sorts of selector elements, transform, transitions, z-index and much more.
     My past projects have brought me to use a couple of tools to make my styling life simpler. For instance, I have used Sass and its great functionalities. I have also looked into some tools that answer some of the conundrums that CSS brings (e.g. global naming, dependencies) such as CSS-in-JS libraries (I have used JSS and styled components). In the future, I would love to use CSS frameworks such as Bulma, Materialize, Material-UI, etc...     `,
  },
  html: {
    title: `HTML`,
    content: `HTML is the most famous language of the web. There is more to it than divs and spans!`,
    expandedContent: `HTML presents itself with a set of tags, attributes, actions and more to create content on the web page. Even though some javascript libraries take over some of those roles, the HTML markup remains something important for the browser (buttons should not be a div but a button tag, even though they can be in a div container).
    I would really want to get better at implementing solutions that respect WCAG standards to make the web accessible to all.
    There are also some HTML templating tools like PUG or Haml but I have not had a use case for them so far. `,
  },
  git: {
    title: 'Git',
    content: `Git is probably the most famous version control tool.`,
    expandedContent: `Git is a powerful version control tool. I use it in all my projects. Not only can I checkout to a new branches to work on a fix to issues or try new things without affecting the master, but I can also save my files to the remote repository on the clouds and by coupling that with CI/CD tools I can easily deploy my projects online for the users to experience. I want to get more expertise with this tool and related deployment tools (Docker for instance).    `,
  },
  figma: {
    title: 'Figma',
    content: `Figma is a powerful design tool to sketch out screen layouts and more!`,
    expandedContent: `Figma is a UX/UI design tool that is very trending at the moment. It is well maintained and sees a constant flow of new releases to improve the possibilities for the user. In addtion, Figma allows collaborative work. The great advantage of Figma is that it is easy to change the theme across the layouts with its components system.
    I have not had the chance to work in teams so far. I used Figma to design the layouts of this website as well as some vector graphics. I think it is so valuable and time-saving to have a clear idea of what to implement, and so to first design it. I really loved using Figma. I wonder how it compares with its competitors.
    `,
  },
  jquery: {
    title: 'jQuery',
    content: `jQuery is a very powerful and widely-used javascript library.`,
    expandedContent: `jQuery has been around for quite some time and has now most used javascript library on the web. Its synthax is very elegant and concise. It makes it easy to handle the DOM (for animations for instance or for content update), handle events, make AJAX calls and much more. Another advantage is its size, compared to other javascript libraries out there. I like jQuery and I have used it in one of one of my projects.
    `,
  },
  cpp: {
    title: 'C++',
    content: `C++ is an OOP language designed for the purpose of perfomance.`,
    expandedContent: `C++ is an object-oriented programming language. I learned C++ during my college years as part of the curicculum. It was the next step after C. I love the idea of object orientated programming. Abstraction, reusability, atomization (as I call it) make this tool very useful for some problems. My most recent experience with C++ was to optimize a code (as part of a job coding test) where objects in 3D space were rendered every frame based on the position of the observer. It was hard because I just had the file with no explanations and had to figure what was actually happening before I could come up with solutions to make the rendering faster (which I did and landed me the interview).
    `,
  },
  javascript: {
    title: 'Javascript',
    content: `Javascript is a core technology of the web.`,
    expandedContent: `Javascript was developped to enable cross-compatibility between browsers. It respects ECMAScript, a standard that sees some releases once a while, but most notably ES6 with its new synthax to : import modules, create arrow-functions, promises, utilities for arrays... I personally fell in love with Javascript and was one of the main reasons why I started learning web-development. My goal is to become very proficient with this language.
    `,
  },
  react: {
    title: 'React',
    content: `React is a javascript library used to develop frontend application.`,
    expandedContent: `React works on a component based paradigm to display data to the DOM. It provides a great developper experience with its JSX synthax. Once you get the lifecycle theory of react it is really fun to play with. It can be used to create SPAs or server-side rendered applications. React does not expressedly ship with anything else than that. But there are many libraries to help react with, for instance, routing or state management. A great advantage of React is that it is easy to transition to mobile app development with React Native. Most recently, in 2019, React introduced Hooks that help to make dealing with our components' lifecycle easier and called for a transition towards functional components. They are easier to read, use less code and are super intuitive.
    `,
  },
  typescript: {
    title: 'Typescript',
    content: `Typescript is basically Javascript with static type definitions.`,
    expandedContent: `Javascript uses dynamic typing which can lead to mistakes in the code that cannot be detected but at runtime. Typescript comes to the rescue by providing a set of rules which prevents any wrong code to compile. So typescript is a safeguard against error at runtime since it does not allow the code to even go pass compilation. Typescript is quite hard to learn but it is worth it. Especially if you work in teams or with long projects were someone needs to go back at the code later on. because it provides some sort of documentation and the code can be shared while limiting errors. I only started learning it recently and I think it is a great tool. It's exciting to have more to learn with this language.
    `,
  },
  gsap: {
    title: 'GSAP',
    content: `GSAP is a performant and professional animation library for the web`,
    expandedContent: `GSAP is a highly performant library with a professional and clean synthax to make web animations. Whether it be animating elements like divs and spans, svgs or even 3d objects, GSAP is there to do the job. GSAP comes with many plugins to do all sorts of things. I recently tried GSAP for this project. I found the timeline feature very powerful to create the animations on this card component. It interfaced well with React and has an extensive documentation. There is so much more for me to learn in GSAP, it's exciting! I am also interested in Framer-Motion because I like how it uses motion values and I have seen them at work in React Native animations using reanimated 2.
    `,
  },
  nodejs: {
    title: 'Node.js',
    content: `Node.js is a backend javascript runtime environment.`,
    expandedContent: `Node.js enables developers to use the same language for scripting on the backend that they use to make their client-side applications. Node.js makes it easy for javascript developers to implement server-side rendering. It is highly scalable thanks to its architecture. It also uses a packet management system called npm. npm is a great tool to manage packages and get thousands of open-source packages from the community. At the moment, I am focusing on becoming really skilled at front-end development. But in the future, I would like to know more about server side programming. I have documented myself a little bit on Express.js, a back-end library.
    `,
  },
  jss: {
    title: 'JSS',
    content: `JSS is a CSS-in-JS library to create styles with certain benefits.`,
    expandedContent: `The advantage of JSS is conflict free styling. Unlike CSS which uses globals, JSS allows the developer to have styling specific to the component and thus eliminates some of the problems of CSS. Some equivalents are CSS modules or styled components. I have used JSS for this project and have found it difficult to achieve some very specific goals when used with React. But I have to admit that component specific styling is very useful.
    `,
  },
};

export default cardContent;
