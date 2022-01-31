//>>>>>>>>>>>>>>>>>>>DATA USED IN HOME-PAGE<<<<<<<<<<<<<<<<<<<<<<<

//Data used in header
export const navigation = [
  { id: '1', name: 'Work', href: '/', to: 'hero' },

  { id: '2', name: 'About', href: '/about', to: 'about' },
];

//Data used in Footer
export const footer = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z'
          fill='rgba(250,249,240,1)'
        />
      </svg>
    ),
    link: '/',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z'
          fill='rgba(250,249,240,1)'
        />
      </svg>
    ),
    link: 'https://github.com/AkshayBenny',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z'
          fill='rgba(250,249,240,1)'
        />
      </svg>
    ),
    link: '/',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z'
          fill='rgba(250,249,240,1)'
        />
      </svg>
    ),
    link: '/',
  },
];

//Data for social media links on hero section and footer
export const socialMedia = [
  {
    name: 'Resume',
    link: '/',
    icon: '',
  },
  {
    name: 'Figma',
    link: '/',
    icon: '',
  },
  {
    name: 'Linkedin',
    link: '/',
    icon: '',
  },
  {
    name: 'Twitter',
    link: '/',
    icon: '',
  },
];

// >>>>>>>Data for the project section of home page<<<<<<<<<<
//While adding new project data make sure to get the id number correct
//
//
//To add more than one button add button object data with 'name' and 'link' and their values as an array. Example given below
//Example:>>>>
//  button: [{name:'button1', link: 'https://twitter.com'}, {name:'button2', link: 'https://twitter.com'}]
export const projectCards = [
  {
    id: 1,
    img: 'https://uitemplate.net/wp-content/uploads/2021/08/Sleep-App-UI-Kit-Free.png',
    heading: 'Ctracker',
    description:
      'Maintaining records of staff, customers  and visitors contact tracing purposes, as set out in the Government guidance due to COVID-19.',
    points: [
      { point: 'Flutter QR code scanner application' },
      {
        point: 'Recieved *237 duplicated* and 7 favourites in figma community',
      },
    ],

    type: 'phone',
    button: [{ name: 'View Project', link: '/' }],
  },
  {
    id: 2,
    img: 'https://uitemplate.net/wp-content/uploads/2021/08/Sleep-App-UI-Kit-Free.png',
    heading: 'Livangle',
    description:
      'Livangle is an online e-commerce platform for your choice of business(Eg: Online Shopping, Healthcare, Food & Beverage etc) based in UAE & India. ',
    points: [
      { point: 'E-commerce Android Application' },
      {
        point: 'Happy Clients :)',
      },
    ],
    type: 'phone',
    button: [{ name: 'View Project', link: '/' }],
  },
  {
    id: 3,
    img: 'https://uitemplate.net/wp-content/uploads/2021/08/Sleep-App-UI-Kit-Free.png',
    heading: 'TT Club',
    description:
      'Maintaining records of staff, customers  and visitors contact tracing purposes, as set out in the Government guidance due to COVID-19.',
    points: [
      { point: 'Flutter QR code scanner application' },
      {
        point: 'Recieved *237 duplicated* and 7 favourites in figma community',
      },
    ],
    type: 'phone',
    button: [
      { name: 'View Project', link: '/' },
      { name: 'View Demo', link: '/' },
    ],
  },
];

//>>>>>>>>>>>>Data for playground section of home page<<<<<<<<<<<<
export const playground = [
  {
    img: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  },
  {
    img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1600865834039-1ce64541fada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
];

//>>>>>>>>>>>>Data for testimonials in the home page<<<<<<<<<<<<
export const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: '/',
    name: 'Kim Jones',
    post: 'Design Mentor, FOFK',
    testimonial:
      'Skilled in leadership, seeking to leverage solid design skills with a focus on collaboration, communication and passion.',
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: '/',
    name: 'Tim Cook',
    post: 'Product Manager, Peeps',
    testimonial:
      'When you are joyful, when you say yes to life and have func and project positivity all around you, you become a sun in the center of every constellation, and people want to be near you.',
  },
  {
    img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: '/',
    name: 'Zameel Pichen',
    testimonial:
      "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  },
];

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>DATA USED IN ABOUT-PAGE<<<<<<<<<<<<<<<<<<<<<<<
export const aboutData = {
  aboutMyself: {
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    heading: "Hi there, my name is Akhil TJ and I'm a UI/UX Designer",
    philosophy: 'Add value to things to people and to myself',
    bio: 'I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness.',
  },
  skillHeading: {
    heading: "It's incredible when skills and passion comes together",
  },
  mySkills: {
    skills: [
      'User Interface Design',
      'Wireframing',
      'Rapid Prototyping',
      'Design Thinking',
      'Design System',
      'User Experience Design',
    ],
    tools: [
      'Adobe XD',
      'Figma',
      'Miro',
      'Canva',
      'Ms Word',
      'GIT/GITHUB',
      'Trello',
      'Adobe Photoshop',
      'Notion',
    ],
    technology: [
      'html',
      'css',
      'javascript',
      'flutter',
      'kotlin',
      'android',
      'c',
      'c++',
    ],
  },
  myPictureHeading: 'Life is what happens when you’re busy making other plans.',
  myPictures: [
    {
      img: 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      img: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      img: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      img: 'https://images.unsplash.com/photo-1499756630622-6a7fd76720ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
  ],
};
