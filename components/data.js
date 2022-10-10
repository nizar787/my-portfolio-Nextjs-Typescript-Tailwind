export const projects = [
  {
    classCard: '1',
    title: 'google clone',
    description:
      'this is a google cole and not the real google page you can searsh find results.',
    imageSrc: './project.png',
    linkTo: 'https://meetup-app-gamma-ten.vercel.app//',
    stack: [{ stackItem: 'React' }, { stackItem: 'Firebase' }],
  },
  {
    classCard: '2',
    title: 'feedback App',
    description:
      ' feedback app allows users to add update and delete feedback,it uses mock rest api .',
    imageSrc: './project2.png',
    linkTo: 'https://meetup-app-gamma-ten.vercel.app/',
    stack: [{ stackItem: 'React' }, { stackItem: 'Firebase' }],
  },
  {
    classCard: '3',
    title: ' e commerce clothes-shop',
    description: 'e commerce  selling clothes using react dedux .',
    imageSrc: './project3.png',
    linkTo: 'https://meetup-app-gamma-ten.vercel.app//',
    stack: [{ stackItem: 'React' }, { stackItem: 'Redux' }, , ,],
  },
  {
    classCard: '4',
    title: 'Project House Marketplace',
    description:
      'Web app where people can come and register and they can list their home or their apartment for rent or for sale , it uses Firebase 9 and includes authentication/ google auth, Leaflet for, Firestore queries, file storage.',
    imageSrc: './project4.png',
    linkTo: 'https://meetup-app-gamma-ten.vercel.app/',
    stack: [{ stackItem: 'React' }, { stackItem: 'Firebase' }],
  },
  {
    classCard: '5',
    title: 'support desk tickets',
    description:
      'MERN app (Redux Toolkit): frontend:REACT,REDUX,axios,toastify backend:express,jsonwebtoken,mongodb,mongoose.',
    imageSrc: './project5.png',
    linkTo: 'https://meetup-app-gamma-ten.vercel.app/',
    stack: [{ stackItem: 'Tailwind CSS' }, { stackItem: 'Javascript' }],
  },
]

  // {projects && projects.map((project)=>(
  //   <PortfolioCard key={uuidv4()} project={project} />))}